const CardMovieLg = () => {
    return (
        <div className="w-[300px] h-[471px] rounded-lg overflow-hidden hover:w-[328px] hover:h-[363px]">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5CFDF5C0486AC925027E5395CED645D6F9E42DA445E25EC45D3D2BC4A7B7EE64/scale?width=506&aspectRatio=2.00&format=jpeg" alt="" />
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

export default CardMovieLg
