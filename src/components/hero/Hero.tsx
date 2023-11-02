
const Hero = () => {
  return (
    <main className="w-full flex justify-center bg-uber bg-no-repeat bg-cover md:px-20 md:py-10">
      {/* Div que centraliza */}
      <section className="w-full max-w-7xl">
        {/* div do card */}
        <div className="w-full flex flex-col max-w-lg bg-slate-50">
          {/* section dos icones */}
          <section className="flex bg-slate-200 pt-5">
            <div className="flex-1 flex flex-col items-center justify-center">
              <i className="fa fa-signal" style={{ fontSize: "32px" }}></i>
              <span className="text-center">Faça Viagens ou Entregas</span>
              <span className="w-full border-2 flex-1 border-black"></span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <i className="fa fa-car" style={{ fontSize: "32px" }}></i>
              <span>Viajar</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <i className="fa fa-key" style={{ fontSize: "32px" }}></i>
              <span>Alugue Carros</span>
            </div>
          </section>
          {/* fim da section dos icones */}   
            {/* Section dos textos */}
            <section className="w-full flex flex-col py-3 px-4 mt5 gap-5">
            <span className="text-4xl font-bold">Assuma o comando <br /> e ganhe</span>
            <span>Dirija na plataforma com maior número de usuários ativos</span>
            <button className="self-start bg-black text-white px-2 py-2 rounded-lg font-bold">
              Cadastre-se para dirigir
            </button>
            <a
              href="#"
              className="border-slate-300 border-b-2 self-start hover:text-slate-400 mt-5 mb-9"
            >
              Saiba mais como dirigir e fazer entregas
            </a>
          </section>
          {/* fim da section dos textos */}     
        </div>
        {/* fim da div card */}
      </section>
      {/* Fim da div que centraliza */}
    </main>
  )
}

export default Hero