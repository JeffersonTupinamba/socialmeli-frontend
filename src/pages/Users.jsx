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
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2>Lista de Usuários</h2>
      <Link to="/users/create" className="btn-create" style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        + Novo Usuário
      </Link>
    </div>

    {loading ? (
      <p>Carregando usuários...</p>
    ) : (
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc", textAlign: "left" }}>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #eee" }}>
                <td>{user.ID}</td>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                Nenhum usuário encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )}
  </div>
  );
}

export default Users;