import { Link } from "react-router-dom";
import type Category from "../../../models/Category";
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";

interface CategoryCardProps {
  category: Category;
  randomPhoto: number;
}

function CategoryCard({ category, randomPhoto }: CategoryCardProps) {
  return (
    <div className="flex items-center justify-between border border-slate-400 rounded overflow-hidden p-1.5 mx-2 my-2">
      <div className="h-15 w-15 overflow-hidden">
        <img
          src={
            randomPhoto < 10
              ? `/photos/0${randomPhoto.toString()}.png`
              : `/photos/${randomPhoto.toString()}.png`
          }
          alt="nutribox food photo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start md:w-[75%] lg:w-[90%]">
        <span className="font-semibold text-xl">{category.nome}</span>
        <span>{category.descricao}</span>
      </div>
      <div className="flex gap-2">
        <Link to={`/categorias/editar/${category.id}`}>
          <button className="p-3 bg-lime-500 hover:bg-lime-600 rounded shadow transition-colors cursor-pointer">
            <PencilSimpleIcon size={24} color="#F9FAFB" />
          </button>
        </Link>
        <Link to={`/categorias/deletar/${category.id}`}>
          <button className="p-3 bg-amber-500 hover:bg-amber-600 rounded shadow transition-colors cursor-pointer">
            <TrashIcon size={24} color="#F9FAFB" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
