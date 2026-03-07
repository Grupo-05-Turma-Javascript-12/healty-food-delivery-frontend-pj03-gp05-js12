import { useState } from "react";
import { Outlet } from "react-router-dom";
import AsideProdutos from "../components/product/productAside/AsideProdutos";

export type ProdutosContextType = {
  precoBusca: string;
  categoriasSelecionadas: number[];
};

function ProdutosLayout() {
  const [precoBusca, setPrecoBusca] = useState<string>("");
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<
    number[]
  >([]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f8fafc_35%,#eef2f7_100%)]">
      <div className="flex flex-col gap-8 p-6 lg:flex-row lg:p-10">
        <AsideProdutos
          precoBusca={precoBusca}
          setPrecoBusca={setPrecoBusca}
          categoriasSelecionadas={categoriasSelecionadas}
          setCategoriasSelecionadas={setCategoriasSelecionadas}
        />

        <div className="flex-1">
          <Outlet
            context={{
              precoBusca,
              categoriasSelecionadas,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProdutosLayout;
