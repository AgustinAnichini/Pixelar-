export default function Servicios() {

    return(
        <>
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="md:w-1/2 relative">
                    <img
                    src={'./servicios.avif'}
                    alt="Ilustración de servicios"
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                </div>

                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white" style={{ backgroundColor: 'var(--primary-color)'}}>
                    <h1 className="pb-5 text-4xl font-semibold mb-4">Nuestros servicios.</h1>

                    <div className="flex flex-col gap-6 pl-10 ">
                        <div className="flex items-start gap-4">
                            {/* <img src={'./disenio-icon.svg'} alt="Icono de diseño" className="w-8 h-8 flex-none" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 flex-none">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>

                            <div>
                            <p className="font-semibold text-xl mb-1 ">Diseño integral.</p>
                            <p className="text-sm text-gray-400 ">Acompañamos a nuestros clientes a construir juntos el diseño de la identidad de su marca con todos los elementos gráficos y digitales que necesite.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            {/* <img src={'./web-icon.svg'} alt="Icono de diseño web" className="w-8 h-8 flex-none" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-15 h-auto pt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg>

                            <div>
                            <p className="font-semibold text-xl mb-1">Diseño web.</p>
                            <p className="text-sm text-gray-400">Diseñamos páginas web a medida, landing pages y web institucionales. Siempre bajo estándares web y velando por la mejor performance.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            {/* <img src={'./ux-icon.svg'} alt="Icono de diseño UX" className="w-8 h-8 flex-none" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 flex-none pt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>

                            <div>
                            <p className="font-semibold text-xl mb-1">Diseño UX</p>
                            <p className="text-sm text-gray-400">Durante el proceso de diseño empleamos un conjunto de técnicas para lograr la mayor efectividad, eficiencia y satisfacción en los usuarios.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            {/* <img src={'./seo-icon.svg'} alt="Icono de SEO" className="w-8 h-8 flex-none" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 flex-none">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                            <div>
                            <p className="font-semibold text-xl mb-1">SEO</p>
                            <p className="text-sm text-gray-400">Realizamos el análisis y la estrategia SEO para posicionar un sitio web de manera orgánica en Google en las primeras posiciones de las búsquedas online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}