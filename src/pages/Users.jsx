import { Link } from "react-router-dom";

function Users() {
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

      <p>Aqui vamos listar os usuários no futuro.</p>
      {/* depois: tabela/lista de usuários */}
    </div>
  );
}

export default Users;