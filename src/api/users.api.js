import axios from "axios";

export const getUsersRequest = async () =>
  await axios.get("https://crud-users-antpack.herokuapp.com/users");

