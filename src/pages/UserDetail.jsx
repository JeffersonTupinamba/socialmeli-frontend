import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams(); // pega o :id da rota

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>ID do usuário: {UserId}</p>
      <p>Aqui vamos mostrar os dados de um usuário específico.</p>
      {/* depois: chamada GET /users/{id} para a API */}
    </div>
  );
}

export default UserDetail;