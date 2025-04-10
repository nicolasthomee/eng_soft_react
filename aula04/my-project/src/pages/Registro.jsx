export default function Register() {
  return (
    <div className="flex items-center justify-center py-60">
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 rounded-xl">Cadastre-se</h2>
        <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Nome" />
        <input className="w-full p-2 border mb-4 rounded-xl" type="email" placeholder="Email" />
        <input className="w-full p-2 border mb-4 rounded-xl" type="password" placeholder="Senha" />
        <button className="bg-blue-500 text-white p-2 w-full rounded-xl">Cadastrar</button>
      </div>
    </div>
  );
}
