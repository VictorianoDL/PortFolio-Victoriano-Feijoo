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
            <p className="descripcion" >Es desarrollador web con conocimientos en tecnologías FrontEnd y BackEnd; se inclina más hacia el diseño pero también puede trabajar sobre BackEnd normalmente. Se considera alguien perfeccionista y capaz, quiere aprender nuevas tecnologías para aplicar soluciones creativas y mejorar la experiencia del usuario.</p>
        </div>
    )
}
export default SobreMi