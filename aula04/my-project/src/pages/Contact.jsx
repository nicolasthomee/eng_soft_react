import { useRef, useState } from "react";

export default function Contact() {

  const nomeRef = useRef(null);
  const [nomeEnviado, setNomeEnviado] = useState("");
  const emailRef = useRef(null);
  const [emailEnviado, setEmailEnviado] = useState("");
  const datalRef = useRef(null);
  const [dataEnviada, setdataEnviada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNomeEnviado(nomeRef.current.value);
    setEmailEnviado(emailRef.current.value);
    setdataEnviada(datalRef.current.value);
  };

  return (
      <form className="bg-zinc-200 dark:bg-white p-6 rounded-lg shadow-md max-w-md mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-xs text-blue-700 font-semibold mb-4">Formulário de Contato</h2>
        <input type="text" ref={nomeRef} placeholder="Digite seu nome" className="w-full p-2 border mb-4 rounded-md" />
        <input type="email" ref={emailRef} placeholder="Digite seu email" className="w-full p-2 border mb-4 rounded-md"/>
        <input type="date" ref={datalRef} placeholder="Digite il" className="w-full p-2 border mb-4 rounded-md"/>
        <textarea className="w-full p-2 border mb-4 rounded-md" placeholder="Mensagem"></textarea>
        <div className="flex items-center justify-center">
         <button type="submit" className="bg-blue-500 w-36 text-white p-2 rounded-md">Enviar</button>
        </div>
        <div className="flex flex-col">
        <a>{nomeEnviado}</a>
        <a>{emailEnviado}</a>
        <a>{dataEnviada}</a>
        </div>
        
      </form>
    );
  }
