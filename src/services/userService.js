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
        const response = await api.post("/users", userData);
        // No axios, os dados retornados pelo servidor ficam em .data
        return response.data;
    }, catch (error) {
        // Se o Gin retorna um erro (ex: 400 ou 500), o axios cai direto aqui
        const message = error.response?.data?.message || "Erro ao conectar com servidor";
        throw new Error(message);
    },
    // função para buscar/listar todos os usuários
    getAll: async () => {
        try {
            const response = await api.get("/users");
            return response.data;
        } catch (error) {
            throw new Error("Erro ao buscar usuários");
        }
    },

};
