import programme_data from "../data/programme-data"


function ProgrammePage() {
    
    return (
        
        <main className="programme-page">

            <h2>Le Programme</h2>

            <div className="programme-page__gallery">

                {
                    programme_data.map((item) => (


                        <div className="programme-page__one-programme">

                            {/*<div className="programme-page__one-programme-img">

                                <img src={`/assets/programme/${item.icon}`} alt={item.titre} />

                            </div>*/}
                            
                            <div className="programme-page__one-programme-text">
                                <h4>{item.titre}</h4>
                                <p>{item.description}</p>
                            </div>

                            
                        </div>



                    ))


                    
                }

            </div>


            <div className="programme-page__temps-fort">

                <h5>Temps fort !</h5>

                <div className="programme-page__temps-fort-content">

                    <div className="programme-page__one-content">

                        <p className="programme-page__one-content-title">Défilé Collection de Lucie</p>
                        <p className="programme-page__one-content-hour">17h</p>

                    </div>

                    <div className="programme-page__one-content">

                        <p className="programme-page__one-content-title">Concert de Xanne</p>
                        <p className="programme-page__one-content-hour">17h30</p>

                    </div>
                    


                </div>

            </div>

            

        </main>


    )
    

}

export default ProgrammePage