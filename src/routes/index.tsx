import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "@/components/Routing/PrivateRoute";

import Home from "@views/Home";
import Signin from "@views/Signin";
import Signup from "@views/Signup";
import Layout from "@components/Layout";
import ParametrosForm from "@/views/Parametros";
import TrimestreList from "@/views/Trimestre/List";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin/>} />
        <Route path="/register" element={<Signup/>} />
        <Route element={<Layout />} >
          <Route path="/" element={<PrivateRoute roles={['user']} component={Home} />} />
          <Route path="/parametros" element={<PrivateRoute roles={['user']} component={ParametrosForm} />} />
          <Route path="/trimestre/listar" element={<PrivateRoute roles={['user']} component={TrimestreList} />} />
        </Route>
        <Route path="*" element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}