const CardCategory = ({logo}) => {
    return (
        <div className="bg-fondo w-60 h-[136px] rounded-lg flex justify-center items-center border border-gray-300">
            <img src={logo} alt="" className="w-32" />
        </div>
    )
}

export default CardCategory
