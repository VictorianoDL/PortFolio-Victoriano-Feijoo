import "./Contacto.css"

const Contacto = ()=>{
    return(
        <div id="contacto-content">

            <img id="papel" src="./Papel-3.png" alt="Papel" />
            <img id="papel-mobile" src="./Papel-Mobile.png" alt="Papel" />

            <div className="skills-grid">

                <h2 className="skill-titulo">Informacion de Contacto</h2>

                <div className="contacto-informacion">

                    <div>
                        <p className="negrita">Email</p>
                        <p>VictorianoFeijoo61@gmail.com</p>
                    </div>

                    <div>
                        <p className="negrita">Telefono</p>
                        <p>+54 2494-349739</p>
                    </div>

                    <div>
                        <p className="negrita">Instagram</p>
                        <p>@victoriano_feijoo</p>
                    </div>

                    <div>
                        <p className="negrita">GitHub</p>
                        <p>VictorianoDL</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Contacto