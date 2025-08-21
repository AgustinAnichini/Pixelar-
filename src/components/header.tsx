export default function Header() {
    
    return (
        <>
            <nav className="flex justify-between items-baseline bg-white-800 text-white p-5 shadow-md">
                <div className="flex items-center pl-20">
                    <h1 className="text-black text-2xl">Pixelar</h1>
                </div>
                
                <div className="flex justify-around pr-20">
                    <ul className="flex space-x-7 text-black">
                        <li><a href="/" className="hover:text-blue-500">Inicio</a></li>
                        <li><a href="/servicios" className="hover:text-blue-500 ">Servicios</a></li>
                        <li><a href="/proyectos" className="hover:text-blue-500">Proyectos</a></li>
                        <li><a href="/nosotros" className="hover:text-blue-500">Nosotros</a></li>
                        <li><a href="/contacto" className="hover:text-blue-500">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}