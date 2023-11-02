
const About = () => {
  return (
    <section className="w-full flex justify-center md:px-20 md:py-10">
      {/* Div centralizadora */}
      <div className="w-full max-w-7xl flex flex-col gap-10 px-2 md:flex-row">
        <article className="flex flex-1 flex-col gap-3 py-2">
          <i className="fa fa-users" style={{ fontSize: "32px" }}></i>
          <h2 className="font-bold text-lg">Quem somos</h2>
          <p>
            Find out how we started, what drives us, and how we’re reimagining how the world moves.
          </p>
          <a
            className="border-b-2 self-start"
            href="#">
            Saiba mais sobre a Uber
          </a>
        </article>
        <article className="flex flex-1 flex-col gap-3 py-2">
          <i className="fa fa-clipboard" style={{ fontSize: "32px" }}></i>
          <h2 className="font-bold text-lg">Newsroom</h2>
          <p>
          Confira as notícias mais recentes sobre lançamentos, iniciativas e parcerias.
          </p>
          <a
            className="border-b-2 self-start"
            href="#">
            Acesse o Newsroom
            </a>
        </article>
        <article className="flex flex-1 flex-col gap-3 py-2">
          <i className="fa fa-home" style={{ fontSize: "32px" }}></i>
          <h2 className="font-bold text-lg">Cidadania global</h2>
          <p>
          Leia sobre nosso compromisso de gerar um impacto positivo nas cidades que atendemos.
          </p>
          <a
            className="border-b-2 self-start"
            href="#">
            See our partnerships
          </a>
        </article>
      </div>
    </section>
  )
}

export default About