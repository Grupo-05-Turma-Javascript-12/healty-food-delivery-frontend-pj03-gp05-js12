import type Produtos from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  dataCadastro: string;
  produtos?: Produtos[] | null;
}
