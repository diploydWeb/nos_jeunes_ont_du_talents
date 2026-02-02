function CardTalent(props) {
    
    const cardInfos = props.cardInfos;


    console.log(cardInfos)


    return (

        <div className="card-talent" onClick={() => { props.setIsOpenModal(true), props.setIndexInfos(props.index)} }>

            <div className="card-talent__avatar">

                <img src={`/assets/${cardInfos.avatar}`} alt={`${cardInfos.prenom} ${cardInfos.nom}`} />

            </div>

            <div className="card-talent__infos">

                <div className="card-talent__infos-1">

                    <h2>{`${cardInfos.prenom} ${cardInfos.nom}`}</h2>
                    <p>{cardInfos.titre}</p>

                </div>
                    
            </div>

        </div>

    )
}

export default CardTalent