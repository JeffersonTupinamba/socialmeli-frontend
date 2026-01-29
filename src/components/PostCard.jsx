function PostCard({ post }) {
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px 0",
        backgroundColor: "#f9f9f9",
        color: "#333",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "left",
    };
    return (
        <div style={cardStyle}>
            {/* Mostramos o nome de quem postou */}
      <h4 style={{ margin: "0 0 8px 0", color: "#4CAF50" }}>
        Usuário ID: {post.userId}
      </h4>
      
      {/* Informações do produto */}
      <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
        {post.productName}
      </div>
      
      <div style={{ color: "#666", margin: "4px 0" }}>
        Categoria: {post.category}
      </div>

      {/* O preço formatado */}
      <div style={{ color: "#e91e63", fontWeight: "bold", marginTop: "8px" }}>
        R$ {post.price.toFixed(2)}
      </div>

      {/* A data da publicação */}
      <small style={{ color: "#999" }}>Postado em: {post.date}</small>
        </div>
    );
}

export default PostCard;