import type Produtos from "./Produto";

export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  produtos: Produtos[] | null;
}
