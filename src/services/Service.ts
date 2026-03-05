import axios from "axios";

export const api = axios.create({
  baseURL:import.meta.env.VITE_API_URL
});

export const registerUser = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const loginUser = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const findItems = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

export const registerItem = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const updateItem = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data)
};

export const deleteItem = async (url: string, header: Object) => {
  await api.delete(url, header);
};
