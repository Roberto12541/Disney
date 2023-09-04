const CardEpisode = () => {
    return (
        <div className="h-32 overflow-hidden bg-fondo flex justify-center items-center rounded-lg">
            <img className="h-full" src="https://pictures.betaseries.com/banners/episodes/21106/f8c2b956c7d21c091079e975e7c1a356.jpg" alt="" />
            <div className="p-4 text-gray-200">
                <div className="flex justify-between mb-4">
                    <p className="text-secundario font-bold">1.Un glorioso proposito</p>
                    <span>50 min</span>
                </div>
                <p>Tras robar el Teseracto en Avengers: Endgame, Loki cae ante la Autoridad de Variacion Temporal.</p>
            </div>
        </div>
    )
}

export default CardEpisode
