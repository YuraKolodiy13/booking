export const fetchCitiesApi = async () => {
  let response = await fetch('https://es31-server.appspot.com/six-cities/hotels');
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  console.log(res, 543645)
  return res;
};
