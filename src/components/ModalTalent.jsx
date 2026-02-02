function ModalTalent(props) {

    const infos = props.talentData[props.indexInfos];


    return (

        <div className={`modal-talent ${props.isOpenModal ? "active" : ""}`}>

            <div className="modal-talent__bg">

                

            </div>
            


            <div className="modal-talent__content">


                <div className="modal-talent__first-part">

                                    
                    <div className="modal-talent__avatar-div">
                        <img src={`/assets/${infos.avatar}`} alt={infos.prenom + " " + infos.nom} />
                    </div>

                    <div className="modal-talent__infos">

                        <p className="modal-talent__infos-name">{infos.prenom + " " + infos.nom}</p>

                        <p className="modal-talent__infos-title">{infos.titre}</p>

                    </div>
                    
                </div>
                
                <div className="modal-talent__second-part">

                    <div className="modal-talent__bio-div">

                        <p className="modal-talent__bio-title">
                            Description du talent
                        </p>

                        <p className="modal-talent__bio">{infos.bio}</p>

                    </div>
                    


                    <div className="modal-talent__social-div">

                        {infos.social && (


                            <p className="modal-talent__social-title">

                                Les réseaux sociaux du talent

                            </p>

                            
                            
                            
                            
                        )}
                        


                        {
                            infos.social?.tiktok && ( 

                                <a href={infos.social.tiktok.link} target="_blank" rel="noopener noreferrer" className="modal-talent__social">

                                    <ion-icon name="logo-tiktok"></ion-icon>
                                    <p>{infos.social.tiktok.pseudo}</p>
                                </a>
                            
                            )
                        }

                        {
                            infos.social?.youtube && ( 

                                <a href={infos.social.youtube.link} target="_blank" rel="noopener noreferrer" className="modal-talent__social">

                                    <ion-icon name="logo-youtube"></ion-icon>
                                    <p>{infos.social.youtube.pseudo}</p>
                                </a>
                            
                            )
                        }

                        {
                            infos.social?.insta && ( 

                                <a href={infos.social.insta.link} target="_blank" rel="noopener noreferrer" className="modal-talent__social">

                                    <ion-icon name="logo-instagram"></ion-icon>
                                    <p>{infos.social.insta.pseudo}</p>
                                </a>
                            
                            )
                        }


                        {
                            infos.social?.facebook && ( 

                                <a href={infos.social.facebook.link} target="_blank" rel="noopener noreferrer" className="modal-talent__social">

                                    <ion-icon name="logo-facebook"></ion-icon>
                                    <p>{infos.social.facebook.pseudo}</p>
                                </a>
                            
                            )
                        }

                        
                        {
                            infos.social?.qrcode && ( 

                                <a className='modal-talent__social-qrcode' href={infos.social.qrcode.link} target="_blank" rel="noopener noreferrer">
                                    <img src={`/assets/${infos.social.qrcode.img}`}></img>
                                </a>
                            
                            )
                        }



                    </div>



                </div>




                <button aria-label="Close nav" className='modal-talent__close_button' onClick={() => { props.setIsOpenModal(false)}}  >
                    <ion-icon name="close-outline"></ion-icon>
                </button>

            </div>

        </div>

    )
}

export default ModalTalent