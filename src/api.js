const BASE_URL =
  "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@ricardo-boraure";

function fetchCourses() {
  return fetch(BASE_URL)
    .then(data => {
      return data.json();
    })
    .then(data => {
      return data.userData;
    })
    .catch(err => console.log(err));
}
export default { fetchCourses };
