import PostCard from "../components/PostCard";

function Posts() {
  // Simulando uma lista de posts que viria da API
  const posts = [
    { id: 1, userId: 10, productName: "Teclado Mecânico", category: "Periféricos", price: 350.00, date: "27-01-2026" },
    { id: 2, userId: 11, productName: "Monitor 144hz", category: "Hardware", price: 1200.00, date: "26-01-2026" },
  ];

  return (
    <div>
      <h2>Feed de Publicações</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Posts;