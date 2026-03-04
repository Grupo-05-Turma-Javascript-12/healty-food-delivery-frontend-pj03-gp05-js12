import type Categoria from "./Categoria";


export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  em_estoque: number;
  categoria: Categoria[] | null;
  usuario: number;
}