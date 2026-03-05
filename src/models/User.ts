import type Produtos from "./Product";

export default interface User {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  dataCadastro?: string;
  produtos?: Produtos[] | null;
}
