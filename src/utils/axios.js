import axios from "axios";
// https://taliin-khishig-react.vercel.app/api/v1
const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default baseUrl;
