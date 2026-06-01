export default async function handler(req, res) {
  const term = encodeURIComponent("Bryn Webb[Author] OR Webb B[Author]");
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmode=json&retmax=6&sort=pub+date`;

  const searchResponse = await fetch(searchUrl);
  const searchData = await searchResponse.json();

  const ids = searchData.esearchresult.idlist;

  if (!ids?.length) {
    return res.status(200).json([]);
  }

  const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(",")}&retmode=json`;

  const summaryResponse = await fetch(summaryUrl);
  const summaryData = await summaryResponse.json();

  const publications = ids.map((id) => {
    const item = summaryData.result[id];

    return {
      id,
      title: item.title,
      journal: item.source,
      date: item.pubdate,
      url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
    };
  });

  res.status(200).json(publications);
}