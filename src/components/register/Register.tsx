
const Register = () => {
    return (
        <section className="w-full flex justify-center px-2 py-20 md:px-20">
            {/* Div centralizadora */}
            <div className="w-full max-w-7xl flex flex-col gap-20 md:flex-row md:justify-between md:items-center">
                <section className="flex items-center justify-around md:flex-1">
                    <h1 className="text-4xl font-bold">
                        Cadastre-se para dirigir
                    </h1>
                    <a className=" flex items-center cursor-pointer">
                        <i
                            style={{fontSize:"32px"}}
                            className="fa fa-chevron-right"></i>
                    </a>
                </section>
                <section className="flex items-center justify-around md:flex-1">
                    <h1 className="text-4xl  font-bold">
                        Cadastre-se para viajar
                    </h1>
                    <a className="flex items-center cursor-pointer h-full">
                        <i
                            style={{fontSize:"32px"}}
                            className="fa fa-chevron-right"></i>
                    </a>
                </section>
            </div>
        </section>
    )
}

export default Register