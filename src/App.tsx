import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CategoryLayout from "./components/category/categoryLayout/CategoryLayout";
import CategoryForm from "./components/category/categoryForm/CategoryForm";
import CategoryDelete from "./components/category/categoryDelete/CategoryDelete";
import ProductLayout from "./components/product/productLayout/ProductLayout";
import Product from "./pages/product/Product";
import ProductForm from "./components/product/productForm/ProductForm";
import ProductDelete from "./components/product/productDelete/ProductDelete";
import Axiom from "./pages/Axiom/Axiom";
import Profile from "./pages/profile/Profile";
import ProfileLayout from "./components/profile/profileLayout/ProfileLayout";
import ProfileForm from "./components/profile/profileForm/ProfileForm";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/authcontext/AuthContext";
import AsideSection from "./components/asideSection/AsideSection";
import LoginLayout from "./components/login/loginLayout/LoginLayout";
import Login from "./pages/login/Login";
import RegisterForm from "./components/login/registerForm/RegisterForm";
import LoginForm from "./components/login/loginForm/LoginForm";
import CategoryList from "./pages/category/CategoryList";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Navbar />
            <AsideSection />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<LoginLayout />}>
                <Route index element={<Login />} />
                <Route path="cadastrar" element={<RegisterForm />}/>
                <Route path="entrar" element={<Login />} />
              </Route>
              <Route path="/categorias" element={<CategoryLayout />}>
                <Route index element={<CategoryList />} />
                <Route path="cadastrar" element={<CategoryForm />} />
                <Route path="editar/:id" element={<CategoryForm />} />
                <Route path="deletar/:id" element={<CategoryDelete />} />
              </Route>
              <Route path="/produtos" element={<ProductLayout />}>
                <Route index element={<Product />} />
                <Route path="cadastrar" element={<ProductForm />} />
                <Route path="editar/:id" element={<ProductForm />} />
                <Route path="deletar/:id" element={<ProductDelete />} />
              </Route>
              <Route path="/usuario" element={<ProfileLayout />}>
                <Route index element={<Profile />} />
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
