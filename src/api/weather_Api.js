const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cc55f3c0b9msh448625293af8b5fp1eb42ajsn3c1b09bd44a2",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(
  "https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// For Axios

//   import axios from "axios";

//   const options = {
//     method: "GET",
//     url: "https://weatherapi-com.p.rapidapi.com/future.json",
//     params: { q: "London", dt: "2022-12-25" },
//     headers: {
//       "X-RapidAPI-Key": "cc55f3c0b9msh448625293af8b5fp1eb42ajsn3c1b09bd44a2",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
