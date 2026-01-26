import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
  };

  const contentStyle = {
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div style={contentStyle}>
      <AppRouter />
      </div>
    </div>
  );
}

export default App;