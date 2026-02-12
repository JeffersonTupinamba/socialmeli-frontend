import { useParams } from "react-router-dom";

function UserEdit() {
  const { UserId } = useParams();

  return (
    <div>
      <h2>Editar Usuário</h2>
      <p>Editando usuário com ID: {UserId}</p>
      <p>Aqui teremos um formulário preenchido com os dados do usuário.</p>
      {/* depois: GET /users/{id} para buscar dados iniciais e PUT /users/{id} para salvar */}
    </div>
  );
}

export default UserEdit;