import { useState } from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import UserSelector from "./components/UserSelector";

function App() {
  // Este é o estado global do usuário ativo
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="App">
      {/* 1. A Navbar fica sempre visível no topo */}
      <Navbar />
      
      {/* 2. O Seletor de Usuário logo abaixo da Navbar */}
      <UserSelector onUserChange={(id) => setActiveUserId(id)} />

      {/* 3. Mostra qual usuário está logado no momento */}
      <div style={{ padding: "10px", textAlign: "center", backgroundColor: "black" }}>
        {activeUserId ? (
          <p>Logado como usuário: <strong>{activeUserId}</strong></p>
        ) : (
          <p>Nenhum usuário selecionado</p>
        )}
      </div>

      {/* 4. O roteador que troca o conteúdo das páginas */}
      <main style={{ padding: "20px" }}>
        <AppRouter activeUserId={activeUserId} />
      </main>
    </div>
  );
}

export default App;