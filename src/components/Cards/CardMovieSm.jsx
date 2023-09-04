const CardMovieSm = () => {
    return (
        <div className="w-[240px] h-[136px] rounded-lg overflow-hidden hover:w-[328px] hover:h-[363px]">
            <img className="w-full" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B257A45072559518EAE1AC6FF8EE84C76B90ADA7EDD60D18F3CC7389680F2EE/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
            <div className="bg-gray-600 px-4 h-full">
                <div className="flex gap-4 mb-4">
                    <button className="bg-secundario w-10 h-10 rounded-full text-lg"><i className="bi bi-plus"></i></button>
                    <button className="bg-secundario w-10 h-10 rounded-full text-lg"><i className="bi bi-plus"></i></button>
                    <button className="bg-secundario w-10 h-10 rounded-full text-lg"><i className="bi bi-plus"></i></button>
                    <button className="bg-secundario w-10 h-10 rounded-full text-lg"><i className="bi bi-plus"></i></button>
                </div>
                <div className="flex text-secundario gap-2 mb-3">
                    <i className="bi bi-tv-fill"></i>
                    <i className="bi bi-tv-fill"></i>
                    <i className="bi bi-tv-fill"></i>
                    <i className="bi bi-tv-fill"></i>
                </div>
                <div className="">
                    <p className="text-gray-200 text-sm text-justify">En Loki, de Marvel Studios, el volatil villano Loki retoma su papel como el Dios de las Mentiras en una nueva serie.</p>
                </div>
            </div>
        </div>
    )
}

export default CardMovieSm
