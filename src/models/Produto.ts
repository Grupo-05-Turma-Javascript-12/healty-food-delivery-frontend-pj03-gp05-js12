import type Categoria from "./Categoria";
import type Usuario from "./Usuario"


export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  em_estoque: boolean;
  categoria: Categoria[] | null;
  usuario: Usuario | null;
}