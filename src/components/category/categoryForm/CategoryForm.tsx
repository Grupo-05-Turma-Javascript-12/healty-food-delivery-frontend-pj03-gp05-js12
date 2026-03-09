import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import type Category from "../../../models/Category";
import { findItems, registerItem, updateItem } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";
import { ArrowLeft } from "phosphor-react";

function CategoryForm() {
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(AuthContext);
  const { id } = useParams();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [category, setCategory] = useState<Category>({} as Category);

  useEffect(() => {
    if (id !== undefined) {
      findCategoryById(id);
    }
  }, [id]);

  async function findCategoryById(id: string) {
    try {
      await findItems(
        `/categorias/${id}`,
        (data: Category) => {
          setCategory(data);
        },
        {
          headers: { Authorization: user.token },
        },
      );
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  function updateState(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  }

  async function RegisterCategory(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!category.nome || !category.descricao) {
      ToastAlerta("Preencha todos os campos obrigatórios.", "warn");
      return;
    }

    try {
      setLoadingSubmit(true);

      if (id !== undefined) {
        await updateItem(`/categorias`, category, setCategory, {
          headers: { Authorization: user.token },
        });
      } else {
        await registerItem(`/categorias`, category, setCategory, {
          headers: { Authorization: user.token },
        });
      }

      navigate("/categorias");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao atualizar/cadastrar a categoria", "error");
      }
    } finally {
      setLoadingSubmit(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] p-6 flex justify-center animate-fadeIn">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            {id ? "Editar Categoria" : "Adicionar Categoria"}
          </h1>

          <button
            onClick={() => navigate("/categorias")}
            className="flex items-center gap-2 border border-green-500 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition cursor-pointer"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </div>

        <form
          onSubmit={RegisterCategory}
          className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 grid grid-cols-1 gap-6"
        >
          <div className="md:col-span-2 grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Nome da Categoria
              </label>

              <input
                type="text"
                name="nome"
                value={category.nome}
                onChange={updateState}
                placeholder="Ex: Mediterrâneo Fit"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Descrição
              </label>

              <textarea
                name="descricao"
                value={category.descricao}
                onChange={updateState}
                placeholder="Descreva o produto..."
                rows={4}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => navigate("/categorias")}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition hover:cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={loadingSubmit}
                className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-sm transition disabled:opacity-50 hover:cursor-pointer"
              >
                {loadingSubmit
                  ? "Salvando..."
                  : id
                    ? "Atualizar Categoria"
                    : "Adicionar Categoria"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
