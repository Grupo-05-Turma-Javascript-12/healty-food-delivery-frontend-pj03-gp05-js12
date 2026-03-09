import { PencilSimple, Trash } from "phosphor-react";
import { Link } from "react-router-dom";
import type Product from "../../../models/Product";

interface ProductCardProps {
  produto: Product;
  abrirModal: (produto: Product) => void;
}

function getProductImage(produtoId: number) {
  const numero = ((produtoId - 1) % 15) + 1;
  const nome = numero.toString().padStart(2, "0");
  return `/photos/${nome}.png`;
}

function ProductCard({ produto, abrirModal }: ProductCardProps) {
  const imagem = getProductImage(produto.id);

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
      <div className="relative h-55 overflow-hidden">
        <img
          src={imagem}
          alt={produto.nome}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0f172acc] via-[#0f172a55] to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-[#7cc000]/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-lg backdrop-blur">
            {produto.categoria?.nome ?? "Categoria"}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h2 className="line-clamp-2 text-[22px] font-bold leading-[1.05] text-white drop-shadow-md">
            {produto.nome}
          </h2>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <p className="line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
          {produto.descricao || "Sem descrição cadastrada para este produto."}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Preço
            </span>
            <strong className="text-[26px] font-black tracking-tight text-slate-800">
              R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
            </strong>
          </div>

          <div className="flex items-center gap-2">
            <Link to={`/produtos/editar/${produto.id}`}>
              <button
                type="button"
                aria-label={`Editar ${produto.nome}`}
                title="Editar produto"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:cursor-pointer"
              >
                <PencilSimple size={20} weight="bold" />
              </button>
            </Link>

            <button
              type="button"
              onClick={() => abrirModal(produto)}
              aria-label={`Deletar ${produto.nome}`}
              title="Deletar produto"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600 shadow-sm transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:bg-orange-500 hover:text-white hover:shadow-md hover:cursor-pointer"
            >
              <Trash size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}

export default ProductCard;
