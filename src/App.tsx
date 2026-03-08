import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/home/Home";
import CategoryLayout from "./layouts/categoryLayout/CategoryLayout";
import CategoryForm from "./components/category/categoryForm/CategoryForm";
import CategoryDelete from "./components/category/categoryDelete/CategoryDelete";
import LoginLayout from "./components/login/loginLayout/LoginLayout";
import RegisterForm from "./components/login/registerForm/RegisterForm";
import Navbar from "./components/navbar/Navbar";
import ProductForm from "./components/product/productForm/ProductForm";
import Axiom from "./pages/Axiom/Axiom";
import ProfileForm from "./components/profile/profileForm/ProfileForm";
import { AuthProvider } from "./contexts/authcontext/AuthContext";
import Login from "./pages/login/Login";
import CategoryPage from "./pages/category/CategoryPage";
import ProfileLayout from "./layouts/profileLayout/ProfileLayout";
import ProductPage from "./pages/product/ProductPage";
import ProductsLayout from "./layouts/productsLayout/ProductsLayout";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<LoginLayout />}>
                <Route index element={<Login />} />
                <Route path="cadastrar" element={<RegisterForm />} />
                <Route path="entrar" element={<Login />} />
              </Route>
              <Route path="/categorias" element={<CategoryLayout />}>
                <Route index element={<CategoryPage />} />
                <Route path="cadastrar" element={<CategoryForm />} />
                <Route path="editar/:id" element={<CategoryForm />} />
                <Route path="deletar/:id" element={<CategoryDelete />} />
              </Route>
              <Route path="/produtos" element={<ProductsLayout />}>
                <Route index element={<ProductPage />} />
                <Route path="cadastrar" element={<ProductForm />} />
                <Route path="editar/:id" element={<ProductForm />} />
              </Route>
              <Route path="/perfil" element={<ProfileLayout />}>
                <Route index element={<ProfilePage />} />
                <Route path="editar/:id" element={<ProfileForm />} />
              </Route>
              <Route path="/axiom" element={<Axiom />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
