import { useState } from "react";
import { userService } from "../services/userService";

function UserSelector({ onUserChange }) {
  // 1. Verifique se o nome aqui é 'userId'
  const [userId, setUserId] = useState(""); 

  // função para atualizar o usuário ativo
  const handleUpdate = async () => {
    if (!userId) return;
    try {
      const user = await userService.getById(userId);
      onUserChange(user.id);
      alert(`Bem-vindo(a) ${user.name}!`);
    } catch (error) {
      alert("Erro ao buscar usuário");
    }
  }

  // 2. Renderiza o componente com o input e o botão
  return (
    <div style={{ padding: "10px", backgroundColor: "#f0f0f0", color: "#333", display: "flex", justifyContent: "flex-end"}}>
      <label>ID do Usuário Ativo: </label>
      <input 
        type="number" 
        // 3. O 'value' deve ser o nome da variável do useState
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
        placeholder="Digite um ID"
      />
      <button onClick={handleUpdate}>Selecionar</button>
    </div>
  );
}

export default UserSelector;