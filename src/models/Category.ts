import type Produtos from "./Product";

export default interface Category {
  id: number;
  nome: string;
  descricao: string;
  produtos: Produtos[] | null;
}
