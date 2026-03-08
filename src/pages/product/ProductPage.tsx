import { Package } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext/AuthContext";
import type { ProdutosContextType } from "../../layouts/productsLayout/ProductsLayout";
import type Product from "../../models/Product";
import { deleteItem, findItems } from "../../services/Service";
import DeleteProductModal from "../../components/product/deleteProductModal/DeleteProductModal";
import ProductCard from "../../components/product/productCard/ProductCard";
import { ToastAlerta } from "../../utils/ToastAlert";

function ProductPage() {
  const { precoBusca, categoriasSelecionadas } =
    useOutletContext<ProdutosContextType>();

  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(
    null,
  );
  const [loadingDelete, setLoadingDelete] = useState(false);

  const { user } = useContext(AuthContext);

  function abrirModal(produto: Product) {
    setProdutoSelecionado(produto);
    setModalOpen(true);
  }

  async function deletarProduto() {
    if (!produtoSelecionado) return;

    try {
      setLoadingDelete(true);

      await deleteItem(`/produtos/${produtoSelecionado.id}`, {
        headers: { Authorization: user.token },
      });

      setProdutos((prev) => prev.filter((p) => p.id !== produtoSelecionado.id));
      setModalOpen(false);
      setProdutoSelecionado(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDelete(false);
    }
  }

  useEffect(() => {
    if (user.token === "") {
      ToastAlerta("Você precisa estar logado", "warn");
      navigate("/");
    }
  }, [user.token]);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        await findItems("/produtos", setProdutos, {
          headers: {
            Authorization: user.token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    buscarProdutos();
  }, [user.token]);

  const produtosFiltrados = produtos.filter((produto) => {
    const filtroPreco =
      !precoBusca || Number(produto.preco) <= Number(precoBusca);

    const filtroCategoria =
      categoriasSelecionadas.length === 0 ||
      categoriasSelecionadas.includes(produto.categoria?.id ?? -1);

    return filtroPreco && filtroCategoria;
  });

  return (
    <section className="w-full animate-fade-in-soft">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
            Produtos cadastrados
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Gerencie seu catálogo com uma visualização moderna, rápida e
            organizada.
          </p>
        </div>
      </div>

      {produtosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {produtosFiltrados.map((produto) => (
            <ProductCard
              key={produto.id}
              produto={produto}
              abrirModal={abrirModal}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-4xl border border-dashed border-slate-300 bg-white/70 px-6 text-center shadow-sm backdrop-blur-sm">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Package size={28} weight="duotone" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-700">
            Nenhum produto encontrado
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Ajuste os filtros aplicados ou cadastre um novo produto para começar
            a montar seu catálogo.
          </p>
        </div>
      )}

      <DeleteProductModal
        produto={produtoSelecionado}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={deletarProduto}
        loading={loadingDelete}
      />
    </section>
  );
}

export default ProductPage;
