import { useState } from "react";

export default function UserPage() {
  const [nome, setNome] = useState("Nicolas Thome");
  const [email, setEmail] = useState("nicolasthome@email.com");
  const [dataNascimento, setDataNascimento] = useState("2000-11-26");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados atualizados com sucesso!");
  };

  return (
    <div className="flex items-center justify-center py-60">
      <form
        className="bg-zinc-200 dark:bg-white p-6 rounded-xl shadow-md max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xs text-blue-700 font-semibold mb-4">
          Atualizar Dados Pessoais
        </h2>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          className="w-full p-2 border mb-4 rounded-xl"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full p-2 border mb-4 rounded-xl"
        />
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          className="w-full p-2 border mb-4 rounded-xl"
        />
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 w-36 text-white p-2 rounded-xl">
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}
