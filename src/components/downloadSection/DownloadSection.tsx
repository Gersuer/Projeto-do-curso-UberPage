
const DownloadSection = () => {
    return (
        <section className="w-full flex justify-center px-4 py-8 bg-slate-300 md:px-20 md:py-10">
            {/* Div centralizadora */}
            <div className=" w-full max-w-7xl flex flex-col gap-4 px-2">
                <h2 className="text-3xl font-bold">
                    É mais fácil pelo app
                </h2>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className=" w-full flex items-center px-8 py-8 bg-slate-100  border-[1px] border-slate-400 md: justify-between md:flex-1">
                        <div className="md:flex md:items-center gap-5">
                            <img className="hidden md:flex" src="/src/assets/qrcode1.png" alt="img" />
                            <div className="flex flex-col justify-between">
                                <span className="text-xl font-bold">
                                    Baixar o app da Uber
                                </span>
                                <span className="hidden md:block">
                                    Leia o código QR para baixar o app
                                </span>
                            </div>
                        </div>
                        <button className="cursor-pointer">
                            <i
                                style={{ fontSize: "32px" }}
                                className="fa fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className=" w-full flex items-center px-8 py-8 bg-slate-100 border-[1px] border-slate-400 md: justify-between  md:flex-1">
                        <div className="md:flex md:items-center gap-5">
                            <img className="hidden md:flex" src="/src/assets/qrcode1.png" alt="img" />
                            <div className="flex flex-col justify-between">
                                <span className="text-xl font-bold">
                                    Baixar o app do parceiro
                                </span>
                                <span className="hidden md:block">
                                    Leia o código QR para baixar o app
                                </span>
                            </div>
                        </div>
                        <button className="cursor-pointer">
                            <i
                                style={{ fontSize: "32px" }}
                                className="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DownloadSection;