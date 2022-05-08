import axios from "axios";

export const api = axios.create({
  baseURL: "https://feedback-widget-project.herokuapp.com/feedback",
});
