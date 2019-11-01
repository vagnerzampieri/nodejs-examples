import axios from "axios";

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error")
};

export { functions };
