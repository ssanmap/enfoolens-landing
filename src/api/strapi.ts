// src/api/strapi.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1337/api", // cambiar luego por Railway si lo subes
});

export const getCarrusel = async () => {
  const res = await API.get("/carrusels?populate=*");
  return res.data.data;
};

export const getProductos = async () => {
  const res = await API.get("/productos?populate=*");
  return res.data.data;
};
