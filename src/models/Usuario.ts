import type Produtos from "./Produtos";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  dataCadastro: string;
  produtos?: Produtos[] | null; 
}