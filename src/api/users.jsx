import axios from "axios";

export default function load() {
  return fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);
    });
}
