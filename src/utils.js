export async function fetchData(url, query) {
  const response = await fetch(`${url}${query}`);
  if (!response.ok) {
    throw Error(`An error occurred when fetching data ${url}`);
  }
  return response.json();
}
