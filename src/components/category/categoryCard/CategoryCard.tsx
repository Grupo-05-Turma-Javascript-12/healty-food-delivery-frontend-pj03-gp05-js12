import { Link } from "react-router-dom";
import type Category from "../../../models/Category";
import { PencilSimple, Trash } from "@phosphor-icons/react";

interface CategoryCardProps {
  category: Category;
  openModal: (category: Category) => void;
}

function CategoryCard({ category, openModal }: CategoryCardProps) {
  return (
    <div className="flex items-center justify-between rounded-3xl overflow-hidden gap-1 px-4 py-4 mx-2 my-2 shadow bg-white">
      <div className="flex flex-col items-start md:w-[75%] lg:w-[90%]">
        <span className="font-semibold text-xl">{category.nome}</span>
        <span>{category.descricao}</span>
      </div>
      <div className="flex gap-2">
        <Link to={`/categorias/editar/${category.id}`}>
          <button
            type="button"
            aria-label={`Editar ${category.nome}`}
            title="Editar categoria"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:cursor-pointer"
          >
            <PencilSimple size={20} weight="bold" />
          </button>
        </Link>

        <button
          type="button"
          onClick={() => openModal(category)}
          aria-label={`Deletar ${category.nome}`}
          title="Deletar categoria"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600 shadow-sm transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:bg-orange-500 hover:text-white hover:shadow-md hover:cursor-pointer"
        >
          <Trash size={20} weight="bold" />
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
