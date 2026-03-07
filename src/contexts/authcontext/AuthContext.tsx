/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";
import type UserLogin from "../../models/UserLogin";
import { loginUser } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlert";

interface AuthContextProps {
  user: UserLogin;
  handleLogout(): void;
  handleLogin(usuario: UserLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: UserLogin) {
    setIsLoading(true);
    try {
      await loginUser("/usuarios/login", userLogin, setUser);
      ToastAlerta("Usuário foi autenticado com sucesso!", "success");
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão inconsistentes!", "error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUser({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
        {children}
    </AuthContext.Provider>
  )

}
