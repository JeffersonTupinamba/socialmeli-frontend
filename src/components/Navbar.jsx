import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "10px 20px",
    backgroundColor: "#282c34",
    display: "flex",
    gap: "16px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const brandStyle = {
    color: "#61dafb",
    fontWeight: "bold",
    marginRight: "32px",
  };

  return (
    <nav style={navStyle}>
      <span style={brandStyle}>SocialMeli</span>

      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/users" style={linkStyle}>
        Usuários
      </Link>

      <Link to="/posts" style={linkStyle}>
        Posts
      </Link>

      <Link to="/following" style={linkStyle}>
        Seguidos
      </Link>
    </nav>
  );
}

export default Navbar;