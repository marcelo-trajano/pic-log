const API_URL = "http://localhost:8787/api/logs";

export async function getLocations() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}
