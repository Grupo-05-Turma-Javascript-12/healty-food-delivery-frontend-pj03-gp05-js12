import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import type { ProdutosContextType } from "../../../layouts/ProdutosLayout";
import type Product from "../../../models/Product";
import { findItems } from "../../../services/Service";
import ProductCard from "../product/ProductCard";

function ListarProdutos() {
  const { precoBusca, categoriasSelecionadas } =
    useOutletContext<ProdutosContextType>();

  const [produtos, setProdutos] = useState<Product[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        await findItems("/produtos", setProdutos, {
          headers: {
            Authorization: user.token,
          },
        });
        console.log("token -> " + user.token);
      } catch (error) {
        console.log(error);
      }
    }

    buscarProdutos();
  }, [user.token]);

  const produtosFiltrados = produtos.filter((produto) => {
    const filtroPreco = !precoBusca || produto.preco <= Number(precoBusca);

    const filtroCategoria =
      categoriasSelecionadas.length === 0 ||
      categoriasSelecionadas.includes(produto.categoria?.id ?? -1);

    return filtroPreco && filtroCategoria;
  });
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6">Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {produtosFiltrados.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ListarProdutos;
