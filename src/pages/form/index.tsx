import Link from "next/link";
import { ArrowBendDownLeft } from "phosphor-react";

export default function Form() {
  const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
  
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
  };

  return (
    <>
      <Link href="/" className="flex">
        <ArrowBendDownLeft size={32} className="text-purple-800" />
      </Link>
      <form className="w-full max-w-lg mx-auto max-h-full mt-16 p-8 rounded-xl shadow-lg" onSubmit={handleFormData}>
        <div className="pb-6">
          <h1 className="text-lg font-bold">Bem vindo a Plin</h1>
          <p>
            É um prazer saber que tem interesse em se juntar a nossa equipe!
          </p>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nome
            </label>
            <input
              className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="name"
              type="text"
              placeholder="Seu Nome Aqui"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="email"
              type="email"
              placeholder="seu@email.aqui"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Telefone
            </label>
            <input
              className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="phone"
              type="tel"
              placeholder="(00) 90000-0000"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Seu Interesse
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-purple-50 border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="interest"
              >
                <option value="" selected disabled>
                  Selecione...
                </option>
                <option>T.I</option>
                <option>Suporte Técnico</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Seu Currículo
            </label>
            <input
              className="appearance-none block w-full bg-purple-50 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="cv"
              type="file"
            />
          </div>

          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-purple-500 rounded-lg focus:shadow-outline hover:bg-purple-800">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
