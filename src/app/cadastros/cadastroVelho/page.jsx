"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
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
      tempoDeCoroinha: form.tempoDeCoroinha.value,
    });

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzM-pRdoDGqvs321cWiNCMQ2kR-c3Bsd8p8b8MCLa3pC6QbdNAN_iR8kOa0IucDCl0b/exec", {
        method: "POST",
        body: data,
      });
      setMensagem("✅ Cadastro realizado com sucesso!");
      form.reset();
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro ao enviar. Tente novamente.");
    }
  }

  return (
    <div>
      <div className="w-full min-h-screen bg-[#f9f9f9]">
        <div className="flex justify-center items-center pt-20">
          <p className="text-[#000] text-[2rem] font-semibold pb-2">Cadastro Velhos</p>
        </div>

        <div className="flex justify-center items-center">
            <p className="text-[#000] text-center max-w-[20rem] pb-6">Preencha os campos abaixos para realizar seu cadastro em nosso sistema</p>
        </div>

        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                    <div className="pb-2">
                        <input name="nome" type="text" placeholder="Nome" className="border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]" required />
                    </div>

                    <div className="pb-2">
                        <input name="idade" type="number" placeholder="Idade" className="border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]" required />
                    </div>

                    <div className="pb-2">
                        <input name="dataNascimento" type="text" placeholder="Data de Nascimento" className="border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]" required />
                    </div>

                    <div className="pb-2">
                        <input name="nomeResponsavel" placeholder="Nome do Responsável" className="border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]" required />
                    </div>

                    <div className="pb-3">
                        <input name="numeroResponsavel" placeholder="Número do Responsável" className="border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]" required />
                    </div>

                    <div className="pb-3">
                        <input name="tempoDeCoroinha" placeholder="Há quanto tempo já serve ?" className="border-2 border-[#000] text-[#000] px-3 py-2 rounded-[10px]" required />
                    </div>
                <div className="pb-10">
                    <button type="submit" className="bg-[#000] py-3 px-[4.78rem] rounded-[10px]" onClick={() => router.push('/cadastros/cadastroRealizado')}>Cadastrar</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
