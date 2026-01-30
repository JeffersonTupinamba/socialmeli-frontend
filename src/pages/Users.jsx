import { Link } from "react-router-dom";
import { userService } from "../services/userService";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]); // Começa com uma lista vazia
  const [loading, setLoading] = useState(true); // Para mostrar um "Carregando..."

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true); // Começa o carregamento
      const data = await userService.getAll();
      setUsers(data); //Guarda a resposta da API na variável users
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false); // Termina o carregamento mesmo com erro
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={containerStyle}>
        <h2>Usuários</h2>

        {/* Botão para criar usuário */}
        <Link to="/users/create" style={buttonStyle}>
          + Criar Usuário
        </Link>
      </div>

      {loading ? (
        <p>Carregando usuários...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default Users;