import "./sobreMi.css"

const SobreMi = ()=>{



    return(
        <div id="sobre-mi-content">

            <img id="papel" src="./Papel.png" alt="Papel" />
            <img id="papel-mobile" src="./Papel-Mobile.png" alt="Papel" />

            <div className="foto-perfil">
                <img id="foto" src="./foto.jpg" alt="Foto Perfil" />
            </div>
            <div className="nombre-edad">
                <h4>Nombre: Victoriano Feijoo</h4>
                <h4>Edad: 25 años</h4>
            </div>
            <p className="descripcion" >Soy desarrollador web con conocimientos en tecnologías FrontEnd y BackEnd; me inclino más hacia el diseño pero también puedo trabajar sobre BackEnd normalmente. Me considero alguien perfeccionista y capaz, quiero aprender nuevas tecnologías para aplicar soluciones creativas y mejorar la experiencia del usuario.</p>
        </div>
    )
}
export default SobreMi