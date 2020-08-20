import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001" //from Home, in JSON Sever
});
