export default function Login() {
  return (
    <div className="flex items-center justify-center py-60">
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 rounded-xl">Login</h2>
        <input className="w-full p-2 border mb-4 rounded-xl" type="email" placeholder="Email" />
        <input className="w-full p-2 border mb-4 rounded-xl" type="password" placeholder="Senha" />
        <button className="bg-blue-500 text-white p-2 w-full rounded-xl mb-4">Entrar</button>
        <p className="text-center">
          Não tem uma conta?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
