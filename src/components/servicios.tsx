export default function Servicios() {

    return(
        <>
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="md:w-1/2">
                    <img
                    src={'./servicios.avif'}
                    alt="Ilustración de servicios"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center" style={{ backgroundColor: 'var(--secondary-color)' }}>
                    <h1 className="pb-5 text-4xl font-semibold mb-5">Nuestros servicios.</h1>

                    <div className="flex flex-col gap-6 pl-10">
                        <div className="flex items-start gap-4">
                            <img src={'./disenio-icon.svg'} alt="Icono de diseño" className="w-8 h-8 flex-none" />
                            <div>
                            <p className="font-semibold text-xl mb-1 ">Diseño integral.</p>
                            <p className="text-sm text-gray-700">Acompañamos a nuestros clientes a construir juntos el diseño de la identidad de su marca con todos los elementos gráficos y digitales que necesite.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={'./web-icon.svg'} alt="Icono de diseño web" className="w-8 h-8 flex-none" />
                            <div>
                            <p className="font-semibold text-xl mb-1">Diseño web.</p>
                            <p className="text-sm text-gray-700">Diseñamos páginas web a medida, landing pages y web institucionales. Siempre bajo estándares web y velando por la mejor performance.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={'./ux-icon.svg'} alt="Icono de diseño UX" className="w-8 h-8 flex-none" />
                            <div>
                            <p className="font-semibold text-xl mb-1">Diseño UX</p>
                            <p className="text-sm text-gray-700">Durante el proceso de diseño empleamos un conjunto de técnicas para lograr la mayor efectividad, eficiencia y satisfacción en los usuarios.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={'./seo-icon.svg'} alt="Icono de SEO" className="w-8 h-8 flex-none" />
                            <div>
                            <p className="font-semibold text-xl mb-1">SEO</p>
                            <p className="text-sm text-gray-700">Realizamos el análisis y la estrategia SEO para posicionar un sitio web de manera orgánica en Google en las primeras posiciones de las búsquedas online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}