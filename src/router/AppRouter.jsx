import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Following from "../pages/Following";

import UserCreate from "../pages/UserCreate";
import UserDetail from "../pages/UserDetail";
import UserEdit from "../pages/UserEdit";

function AppRouter({ activeUserId }) {
  return (
    <Routes>
      {/* Rotas gerais */}
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/following" element={<Following />} />

      {/* Usuários - CRUD */}
      <Route path="/users" element={<Users activeUserId={activeUserId} />} />              {/* lista */}
      <Route path="/users/create" element={<UserCreate />} />  {/* criar */}
      <Route path="/users/:id" element={<UserDetail />} />     {/* detalhe */}
      <Route path="/users/:id/edit" element={<UserEdit />} />  {/* editar */}
    </Routes>
  );
}

export default AppRouter;