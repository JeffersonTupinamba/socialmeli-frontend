import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h2>Usuários</h2>

      <Link to="/users/create">+ Criar Usuário</Link>

      <p>Aqui vamos listar os usuários no futuro.</p>
      {/* depois: tabela com botões "Detalhes", "Editar", "Excluir" */}
    </div>
  );
}

export default Users;