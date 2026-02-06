import { useState } from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import UserSelector from "./components/UserSelector";

function App() {
  // Este é o estado global do usuário ativo
  const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="App">
      {/* 1. A Navbar fica sempre visível no topo */}
      <Navbar />
      
      {/* 2. O Seletor de Usuário logo abaixo da Navbar */}
      <UserSelector onUserChange={(user) => setActiveUser(user)} />

      {/* 3. Mostra qual usuário está logado no momento */}
      <div style={{ padding: "10px 30px 10px 30px", textAlign: "right", backgroundColor: "#f0f0f0" }}>
        {activeUser ? (
          <p>Logado como usuário: <strong>{activeUser.Name}</strong> ({activeUser.Role})</p>
        ) : (
          <p>Nenhum usuário selecionado.</p>
        )}
      </div>

      {/* 4. O roteador que troca o conteúdo das páginas */}
      <main style={{ padding: "20px" }}>
        <AppRouter activeUserId={activeUser?.UserId} />
      </main>
    </div>
  );
}

export default App;