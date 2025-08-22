export default function Hero() {

    return(
        <>
            <div className="relative w-full h-screen">
                <img src="./hero.avif" alt="imagen hero" className="w-full h-screen object-cover object-center" />
            <div className="absolute inset-0 bg-black opacity-50"></div></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">Creamos la Presencia Digital de tu Marca.</h1>
                <p className="pb-3 font-light text-sm md:text-sm text-gray-300 mt-3">Diseñamos experiencias digitales atractivas y eficientes para que tu negocio crezca en el mundo online</p>
                <a href="/nosotros" className="text-white py-3 px-6 rounded-md font-semibold transition duration-300 ease-in-out btn-init ">Conoce mas</a>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 19l-7-7 1.414-1.414L12 16.172l5.586-5.586L19 12l-7 7z" />
                </svg>
            </div>
        </>
    )
}