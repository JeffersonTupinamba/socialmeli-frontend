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
      onUserChange(user);
      alert(`Bem-vindo(a) ${user.Name}!`);
    } catch (error) {
      alert("Erro ao buscar usuário");
    }
  }
  // função para deslogar o usuário
  const handleLogout = () => {
    setUserId(""); // limpa o input
    onUserChange(null); // desloga o usuário
    alert("Usuário deslogado.");
  }

  // 2. Renderiza o componente com o input e o botão
  return ( 
    <div style={{ padding: "20px 20px 10px 20px", backgroundColor: "#f0f0f0", color: "#333", display: "flex", justifyContent: "flex-end"}}>
      <label>ID do Usuário Ativo: </label>
      <input 
        type="number" 
        // 3. O 'value' deve ser o nome da variável do useState
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
        placeholder="Digite um ID"
      />
      <button onClick={handleUpdate}>Selecionar</button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default UserSelector;