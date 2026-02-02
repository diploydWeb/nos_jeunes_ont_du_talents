import talentData from "../data/talents-data";
import CardTalent from "../components/CardTalent";
import ModalTalent from "../components/ModalTalent";
import { useEffect, useState } from "react";

function TalentsPage() {


    /*const [modalInfos, setModalInfos] = useState(undefined);*/
    const [indexInfos, setIndexInfos] = useState(0)
    const [isOpenModal, setIsOpenModal] = useState(false);


    useEffect(() => {

        console.log(indexInfos)

    }, [indexInfos])
    
    return (

        <main className="talents-page">

            <h1 className="talents-page__title">Les Talents</h1>

            <div className="talents-page__gallery">

                {

                    talentData.map((card, index) => (

                        <CardTalent key={index} index={index} setIndexInfos={setIndexInfos} cardInfos={card} setIsOpenModal={setIsOpenModal} />

                    ))

                }


            </div>

            
            <ModalTalent indexInfos={indexInfos} talentData={talentData} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />

        </main>

    )
}

export default TalentsPage