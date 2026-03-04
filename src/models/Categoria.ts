import type Produtos from "./Produtos";

export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  produtos: Produtos[] | null;
}