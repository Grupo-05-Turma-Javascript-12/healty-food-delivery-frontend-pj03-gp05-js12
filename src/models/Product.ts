import type Categoria from "./Category";
import type Usuario from "./User";

export default interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  em_estoque: boolean;
  categoria: Categoria[] | null;
  usuario: Usuario | null;
}
