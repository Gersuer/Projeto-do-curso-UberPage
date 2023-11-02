
const PostsContainer = () => {
    return (
        <section className="w-full flex justify-center py-10 px-2 md:px-20 md:py-10">
            {/* Div centralizadora */}
            <div className="w-full max-w-7xl flex flex-col gap-20">
                <h1 className=" w-full max-w-2xl text-2xl font-bold sm:text-4xl">
                    Procupados com sua segurança onde quer que você vá.
                </h1>

                <div className="w-full max-w-7xl flex flex-col gap-4 md:flex-row">
                    <article className="flex flex-col flex-1 gap-2">
                        <a
                            className="w-full max-w-2xl flex flex-col gap-2"
                            href="#">
                            <img
                                src="/src/assets/post1.png"
                                alt="img" />
                            <h2 className="font-bold text-xl w-full max-w-2xl ">
                                Sua segurança é a nossa prioridade
                            </h2>
                            <p className="text-sm">
                                Com todos os recursos de segurança e todas as normas do nosso Código da Comunidade Uber, estamos comprometidos em ajudar a criar um ambiente seguro para nossos usuários.
                            </p>
                        </a>
                    </article>
                    <article className="w-full flex flex-col flex-1 gap-2">
                        <a
                            className="w-full max-w-2xl flex flex-col gap-2"
                            href="#">
                            <img
                                src="/src/assets/post2.png"
                                alt="img" />
                            <h2 className="font-bold text-xl w-full max-w-2xl">
                                Colocamos mais de 10.000 cidades em movimento
                            </h2>
                            <p className="text-sm w-full">
                                O app está disponível em milhares de cidades no mundo todo para que você possa solicitar uma viagem mesmo longe de casa.
                            </p>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default PostsContainer