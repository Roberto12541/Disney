

const Header = () => {
    return (
        <header className="bg-fondo">
            <div className="flex justify-between max-w-7xl mx-auto">
                <ul className="flex text-secundario py-5 gap-6 text-sm items-center">
                    <li><img src="https://www.premiumbolivia.com/wp-content/uploads/2022/01/disney-logo-2.png" alt="" className="w-20"/></li>
                    <li className="flex gap-2"><i className="bi bi-house-door-fill"></i> Inicio</li>
                    <li className="flex gap-2"><i className="bi bi-tv-fill"></i> Series</li>
                    <li className="flex gap-2"><i className="bi bi-film"></i> Peliculas</li>
                    <li className="flex gap-2"><i className="bi bi-star-fill"></i> Originales</li>
                </ul>
                <ul className="flex text-secundario py-5 gap-6 text-sm items-center">
                    <li className="flex gap-2"><i className="bi bi-search"></i> Buscar</li>
                    <li className="flex gap-2"><i className="bi bi-plus"></i> Mi lista</li>
                    <li className="flex gap-2"><i className="bi bi-person-circle"></i> Perfil</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
