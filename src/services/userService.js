import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    },
});
export const userService = {
    // função para criar um usuário
    create: async (userData) => {
        try {
        const response = await api.post("/users", userData);
        // No axios, os dados retornados pelo servidor ficam em .data
        return response.data;
        } catch (error) {
        // Se o Gin retorna um erro (ex: 400 ou 500), o axios cai direto aqui
        const message = error.response?.data?.message || error.response?.data?.error || "Erro ao conectar com servidor";
        throw new Error(message);
        }
    },
    // função para buscar/listar todos os usuários
    getAll: async () => {
        try {
            const response = await api.get("/users");
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || error.response?.data?.error || "Erro ao buscar usuários";
            throw new Error(message);
        }
    },
    // função para buscar/listar um usuário específico
    getById: async (userId) => {
        try {
            const response = await api.get(`/users/${userId}`); 
            return response.data; 
        } catch (error) {
            const message = error.response?.data?.message || error.response?.data?.error || "Erro ao buscar usuário"; 
            throw new Error(message); 
        }
    },
    // função para seguir um usuário
    follow: async (userId, sellerId) => {
        try {
            const response = await api.post(`/users/${userId}/follow/${sellerId}`);
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || error.response?.data?.error || "Erro ao seguir usuário";
            throw new Error(message);
        }
    }
};
