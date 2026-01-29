import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";

function UserCreate() {
  const navigate = useNavigate();

  // 1. Estado para o formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "customer", // Valor padrão
  });

  // 2. Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    // função para lidar com o envio (Submit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamada limpa usando o serviço
      const data = await userService.create(formData);
      
      alert("Usuário criado com sucesso!");
      console.log("Resposta do Go:", data);
      
      navigate("/users");
    } catch (error) {
      // O erro 'throw new Error' do serviço aparece aqui no alert
      alert(error.message);
    }
  };

  // Estilos simples para centralizar o formulário
  const formContainerStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    color: "#333"
  };

  const inputGroupStyle = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  };

  const inputStyle = {
    padding: "10px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ddd"
  };

  return (
    <div style={formContainerStyle}>
      <h2>Criar Novo Usuário</h2>

      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Digite o nome completo"
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="exemplo@email.com"
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="role">Tipo de Usuário (Role):</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="customer">Customer (Cliente)</option>
            <option value="seller">Seller (Vendedor)</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" style={{ flex: 1, backgroundColor: "#4CAF50", color: "white" }}>
            Salvar
          </button>
          <button
            type="button"
            onClick={() => navigate("/users")}
            style={{ flex: 1 }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;