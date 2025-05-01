"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const data = new URLSearchParams({
      nome: form.nome.value,
      idade: form.idade.value,
      dataNascimento: form.dataNascimento.value,
      nomeResponsavel: form.nomeResponsavel.value,
      numeroResponsavel: form.numeroResponsavel.value,
    });

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzM-pRdoDGqvs321cWiNCMQ2kR-c3Bsd8p8b8MCLa3pC6QbdNAN_iR8kOa0IucDCl0b/exec", {
        method: "POST",
        body: data,
      });
      setMensagem("✅ Cadastro realizado com sucesso!");
      form.reset();
      router.push('/cadastros/cadastroRealizado');
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro ao enviar. Tente novamente.");
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col items-center">
      <div className="pt-20 text-center">
        <p className="text-[#000] text-[2rem] font-semibold pb-2">Cadastro Novo</p>
        <p className="text-[#000] max-w-[20rem] pb-6 mx-auto">
          Preencha os campos abaixo para realizar seu cadastro em nosso sistema
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-full max-w-[22rem]">
        <input
          name="nome"
          type="text"
          placeholder="Nome"
          className="w-full border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]"
          required
        />

        <input
          name="idade"
          type="number"
          placeholder="Idade"
          className="w-full border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]"
          required
        />

        <input
          name="dataNascimento"
          type="text"
          placeholder="Data de Nascimento"
          className="w-full border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]"
          required
        />

        <input
          name="nomeResponsavel"
          placeholder="Nome do Responsável"
          className="w-full border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]"
          required
        />

        <input
          name="numeroResponsavel"
          placeholder="Número do Responsável"
          className="w-full border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]"
          required
        />

        <button
          type="submit"
          className="bg-[#000] text-white py-3 px-10 rounded-[10px] mt-4"
          onClick={() => router.push('/cadastros/cadastroRealizado')}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
