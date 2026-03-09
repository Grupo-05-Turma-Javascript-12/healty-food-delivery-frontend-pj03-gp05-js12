import { useEffect } from "react";
import type Category from "../../../models/Category";
import { WarningOctagon, X } from "phosphor-react";

interface CategoryDeleteModalProps {
  category: Category | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

function CategoryDeleteModal({
  category,
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}: CategoryDeleteModalProps) {
  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-[6px]"
      />

      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.35)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-red-400 to-red-500" />

        <div className="flex items-start justify-between p-6 pb-0">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-100 to-orange-100 text-red-600 shadow-inner">
              <WarningOctagon size={28} weight="fill" />
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                Confirmar exclusão
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Essa ação remove o item da sua listagem.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 hover:cursor-pointer"
            aria-label="Fechar modal"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Categoria selecionada</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {category.nome}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Depois de deletar, você não poderá recuperar esta categoria pela
              interface.
            </p>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-600 transition hover:bg-slate-100 hover:cursor-pointer"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-red-500 to-red-800 px-5 py-3 font-semibold text-white shadow-lg shadow-red-200 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 hover:cursor-pointer"
            >
              {loading ? "Deletando..." : "Sim, deletar categoria"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDeleteModal;
