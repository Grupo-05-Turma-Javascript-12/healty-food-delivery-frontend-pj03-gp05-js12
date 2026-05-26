import type Categoria from "./Category";

export default interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  em_estoque: boolean;
  categoria: Categoria | null;
}
