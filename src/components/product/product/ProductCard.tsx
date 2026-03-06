import { PencilSimple, Trash } from "phosphor-react";
import type Product from "../../../models/Product";

interface ProductCardProps {
  produto: Product;
}

function getRandomImage() {
  const numero = Math.floor(Math.random() * 15) + 1;
  const nome = numero.toString().padStart(2, "0");
  return `/photos/${nome}.png`;
}

function ProductCard({ produto }: ProductCardProps) {
  const imagem = getRandomImage();

  return (
    <div className="w-full rounded-[18px] border border-[#aeb7c2] bg-[#f3f4f6] p-1 shadow-sm transition hover:shadow-md">
      <div className="relative h-45 w-full overflow-hidden rounded-2xl">
        <img
          src={imagem}
          alt={produto.nome}
          className="h-45 w-full object-cover transition-transform duration-300 hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#7cc000] px-2.5 py-1 text-[16px] font-medium leading-none text-white shadow-sm">
          {produto.categoria?.nome ?? "Categoria"}
        </span>

        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

        <h2 className="absolute left-3 bottom-8 right-3 text-[20px] font-bold leading-[1.05] text-white drop-shadow-2xl">
          {produto.nome}
        </h2>

        <p className="absolute left-3 bottom-2 max-w-[82%] truncate rounded-full bg-white px-2 py-1 text-[12px] leading-none text-[#121416] shadow">
          {produto.descricao}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between px-1 py-2">
        <span className="text-[20px] font-extrabold text-[#1f2937]">
          R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#67b300] text-white transition hover:brightness-95"
            aria-label={`Editar ${produto.nome}`}
            title="Editar"
          >
            <PencilSimple size={18} weight="bold" />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff9d00] text-white transition hover:brightness-95"
            aria-label={`Deletar ${produto.nome}`}
            title="Deletar"
          >
            <Trash size={18} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
