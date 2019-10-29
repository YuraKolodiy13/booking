export const fetchCitiesApi = async () => {
  let response = await fetch('https://es31-server.appspot.com/six-cities/hotels');
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  // console.log(res, 543645)
  return res;
};

export const fetchReviewsApi = async (id) => {
  let response = await fetch(`https://es31-server.appspot.com/six-cities/comments/${id}`);
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  return res;
};
