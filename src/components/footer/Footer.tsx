
const Footer = () => {
    return (
        <footer className="bg-black w-full flex justify-center px-2 py-8">
            <div className="w-full flex max-w-7xl flex-col items-center justify-center gap-4 p-4">
                <img className="w-40" src="/src/assets/uberlogo.png" alt="" />
                <span className="text-white">Projeto feito no curso do Sujeito programador</span>
                <span className="text-white">Apenas para fins de estudo e desenvolvimento web</span>
                <span className="text-white">Desenvolvedor: Gersuer Henrique</span>
                <div className=" w-full flex justify-center gap-2">
                    <img className="w-52" src="/src/assets/lojapple.png" alt="" />
                    <img className="w-52" src="/src/assets/playstore.png" alt="" />
                </div>
            </div>

        </footer>
    )
}

export default Footer