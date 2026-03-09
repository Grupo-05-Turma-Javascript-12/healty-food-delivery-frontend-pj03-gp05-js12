import { useContext, useState, type ChangeEvent } from "react";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

function ProfileForm() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

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
    <div className="w-full min-h-screen bg-[#f6f7f9] p-6 flex justify-center animate-fadeIn">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Editar Perfil
          </h1>

          <button
            onClick={() => navigate("/perfil")}
            className="flex items-center gap-2 border border-green-500 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition cursor-pointer"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 grid grid-cols-1 gap-6"
        >
          <div className="md:col-span-2 grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Nome do Estabelecimento/Empreendedor
              </label>

              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: John Doe's Burgers"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                placeholder="Ex: johndoeburgers@nutribox.com"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Foto de perfil
              </label>

              <input
                type="text"
                name="foto"
                value={formData.foto}
                onChange={handleChange}
                placeholder="Ex: https://www.sitedafoto.com/enderecoDaFoto"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => navigate("/perfil")}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition hover:cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-sm transition disabled:opacity-50 hover:cursor-pointer"
              >
                Atualizar perfil
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;