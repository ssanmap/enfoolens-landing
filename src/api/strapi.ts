// src/api/strapi.ts
import axios from "axios";

const API = axios.create({
  baseURL: "https://admin.enfoolens.cl/api", // cambiar luego por Railway si lo subes
});

export const getCarrusel = async () => {
  const res = await API.get("/carrusels?populate=*");
  return res.data.data;
};

export const getProductos = async () => {
  const res = await API.get("/productos?populate=*");
  return res.data.data;
};

export const getCategorias = async () => {
  const res = await API.get("/categorias?populate=*");
  return res.data.data;
};
