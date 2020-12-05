export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
