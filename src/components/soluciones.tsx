import { Fade, Slide } from "react-awesome-reveal";


export default function Soluciones(){

    return(
        <>
            <div id="soluciones" className="flex flex-col md:flex-row items-start justify-between p-20 gap-10 " style={{ backgroundColor: 'var(--background-color)' }}>
                <div className="md:w-1/2">
                    <Fade cascade duration={500} triggerOnce>
                        <h1 className="pb-5 text-4xl font-semibold">Soluciones Digitales a Medida.</h1>
                        <p className="text-sm">
                            <span className="font-semibold">Potenciamos la presencia digital de emprendedores y marcas</span> con sitios web modernos y optimizados para UX y SEO. Somos Martín y Agustín, desarrolladores y diseñadores full stack en Argentina, listos para llevar tu proyecto al siguiente nivel.
                        </p>
                        <p className="mt-5 text-sm">
                            Cada negocio tiene su esencia, y tu sitio web debe reflejarla. Por eso creamos soluciones digitales totalmente personalizadas, alineadas con tus objetivos, tu lógica de negocio y tu identidad de marca.
                        </p>
                        <p className="mt-5">
                            <span className="font-bold">Creando tu Marca Digital</span>
                        </p>
                        <p>Martin & Agustín | Web & UX.</p>
                        
                        <div className="flex gap-4 mt-5">
                            <a href="https://www.instagram.com/pixelarweb/" target="_blank" rel="noopener noreferrer">
                                <img src="./instagram-icon.svg" alt="Instagram" className="w-6 h-6"/>
                            </a>
                            <a href="https://www.linkedin.com/company/pixelarweb/" target="_blank" rel="noopener noreferrer">
                                <img src="./linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6"/>
                            </a>
                        </div>
                    </Fade>
                </div>

                <div className="md:w-1/2">
                    <Slide direction="right" triggerOnce>
                        <img
                            src={'./soluciones.webp'}
                            alt="Ilustración de soluciones digitales"
                            className="w-full h-auto rounded-lg"
                        />
                    </Slide>
                </div>
            </div>
        </>
    )
}