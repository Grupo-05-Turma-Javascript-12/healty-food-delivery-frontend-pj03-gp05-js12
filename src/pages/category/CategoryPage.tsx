import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Category from "../../models/Category";
import { AuthContext } from "../../contexts/authcontext/AuthContext";
import { deleteItem, findItems } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlert";
import CategoryCard from "../../components/category/categoryCard/CategoryCard";
import { Package } from "phosphor-react";
import CategoryDeleteModal from "../../components/category/categoryDeleteModal/CategoryDeleteModal";

function CategoryPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState<Category | null>(
    null,
  );
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  function openModal(category: Category) {
    setCategorySelected(category);
    setModalOpen(true);
  }

  async function findCategories() {
    try {
      await findItems("/categorias", setCategories, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  async function deleteCategory() {
    if (!categorySelected) return;

    try {
      setLoadingDelete(true);

      await deleteItem(`/categorias/${categorySelected.id}`, {
        headers: { Authorization: user.token },
      });

      setCategories((prev) => prev.filter((p) => p.id !== categorySelected.id));
      setModalOpen(false);
      setCategorySelected(null);
    } catch (error) {
      ToastAlerta("Não foi possível apagar a categoria", "error");
    } finally {
      setLoadingDelete(false);
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "warn");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    findCategories();
  }, [categories.length]);

  return (
    <section className="w-full animate-fade-in-soft">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
            Categorias cadastradas
          </h1>
        </div>
      </div>

      {categories.length > 0 ? (
        <div>
          {categories.map((cat) => (
            <CategoryCard
              category={cat}
              key={cat.id}
              openModal={openModal}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-4xl border border-dashed border-slate-300 bg-white/70 px-6 text-center shadow-sm backdrop-blur-sm">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Package size={28} weight="duotone" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-700">
            Nenhuma categoria encontrada
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Cadastre uma nova categoria para começar a montar seu catálogo.
          </p>
        </div>
      )}

      <CategoryDeleteModal
        category={categorySelected}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={deleteCategory}
        loading={loadingDelete}
      />
    </section>
  );
}

export default CategoryPage;
