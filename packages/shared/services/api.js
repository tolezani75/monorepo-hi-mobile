import axios from "axios";

export const apiUatHiv1 = axios.create({
  baseURL: "https://api.uat.hiedu.co/v1",
});

export const apiUatHiv2 = axios.create({
  baseURL: "https://api.uat.hiedu.co/v2",
});

export const apiHiv1 = axios.create({
  baseURL: "https://api.hiedu.co/v1",
});

export const apiHiv2 = axios.create({
  baseURL: "https://api.hiedu.co/v2",
});
