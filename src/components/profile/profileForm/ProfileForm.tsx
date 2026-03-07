import { useContext, useState, type ChangeEvent } from "react";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import { Link } from "react-router-dom";

function ProfileForm() {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    nome: user?.nome || "",
    usuario: user?.usuario || "",
    foto: user?.foto || "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Perfil atualizado:", formData);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">

      <div className="flex items-center mb-8 w-full">
        <Link
          to="/usuario"
          className="flex items-center gap-2 border border-[#8bc34a] text-[#8bc34a] px-6 py-1.5 rounded-full hover:bg-green-50 transition-all text-sm ml-auto"
        >
          <span className="text-xl">←</span> voltar
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-800 font-bold">
            Nome do Estabelecimento
          </label>

          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do estabelecimento ou seu nome"
            className="border border-gray-300 rounded-md p-3 w-full bg-slate-50 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-800 font-bold">Email</label>

          <input
            type="email"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            placeholder="Digite seu email"
            className="border border-gray-300 rounded-md p-3 w-full bg-slate-50 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-800 font-bold">Foto</label>

          <input
            type="text"
            name="foto"
            value={formData.foto}
            onChange={handleChange}
            placeholder="Digite o link da foto"
            className="border border-gray-300 rounded-md p-3 w-full bg-slate-50 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-[#ff9800] text-white font-bold py-2.5 px-20 rounded-lg hover:bg-orange-600 transition-colors w-fit mt-2 shadow-sm"
        >
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;