import { useState } from "react";

function UserSelector({ onUserChange }) {
  // 1. Verifique se o nome aqui é 'userId'
  const [userId, setUserId] = useState(""); 

  const handleUpdate = () => {
    // 2. Aqui você deve usar o mesmo nome lá de cima
    onUserChange(userId); 
  };

  return (
    <div style={{ padding: "100px", backgroundColor: "#f0f0f0", color: "#333"}}>
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