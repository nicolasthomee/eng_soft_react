import { useState } from "react";

export default function Produtos() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showListForm, setShowListForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-30 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 ">Produtos</h1>
      {/* Buttons to Show Forms */}
      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-xl"
          onClick={() => setShowRegisterForm(!showRegisterForm)}
        >
          {showRegisterForm ? "Fechar Cadastro" : "Abrir Cadastro"}
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded-xl"
          onClick={() => setShowListForm(!showListForm)}
        >
          {showListForm ? "Fechar Lista" : "Abrir Lista"}
        </button>
        <button
          className="bg-yellow-500 text-white p-2 rounded-xl"
          onClick={() => setShowEditForm(!showEditForm)}
        >
          {showEditForm ? "Fechar Edição" : "Abrir Edição"}
        </button>
      </div>

      {/* Form to Register Product */}
      {showRegisterForm && (
        <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 rounded-xl">Cadastro de Produto</h2>
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Nome do Produto" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Descrição" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Unidade" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="number" placeholder="Quantidade em Estoque" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="date" placeholder="Data de Cadastro" />
          <div className="flex items-center mb-4">
            <input className="mr-2" type="checkbox" id="ativo" />
            <label htmlFor="ativo">Ativo</label>
          </div>
          <input className="w-full p-2 border mb-4 rounded-xl" type="number" placeholder="Valor de Venda por Unidade" />
          <button className="bg-blue-500 text-white p-2 w-full rounded-xl">Cadastrar Produto</button>
        </div>
      )}

      {/* Form to List and Filter Products */}
      {showListForm && (
        <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 rounded-xl">Listar e Filtrar Produtos</h2>
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Buscar por Nome" />
          <button className="bg-green-500 text-white p-2 w-full rounded-xl mb-4">Filtrar</button>
          <div className="border-t pt-4">
            <p className="text-gray-700">Produto 1 - Descrição</p>
            <p className="text-gray-700">Produto 2 - Descrição</p>
            <p className="text-gray-700">Produto 3 - Descrição</p>
          </div>
        </div>
      )}

      {/* Form to Edit Product */}
      {showEditForm && (
        <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 rounded-xl">Editar Produto</h2>
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Nome do Produto" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Descrição" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="text" placeholder="Unidade" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="number" placeholder="Quantidade em Estoque" />
          <input className="w-full p-2 border mb-4 rounded-xl" type="date" placeholder="Data de Cadastro" />
          <div className="flex items-center mb-4">
            <input className="mr-2" type="checkbox" id="ativo-edit" />
            <label htmlFor="ativo-edit">Ativo</label>
          </div>
          <input className="w-full p-2 border mb-4 rounded-xl" type="number" placeholder="Valor de Venda por Unidade" />
          <button className="bg-yellow-500 text-white p-2 w-full rounded-xl">Salvar Alterações</button>
        </div>
      )}
    </div>
  );
}
