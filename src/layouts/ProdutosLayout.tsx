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
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10 bg-[#f6f7f9] min-h-screen">
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
  );
}

export default ProdutosLayout;
