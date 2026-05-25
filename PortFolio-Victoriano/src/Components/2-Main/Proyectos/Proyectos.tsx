import "./Proyectos.css"

const Proyectos = ()=>{
    return(
        <div id="proyectos-content">

            <img id="papel" src="./Papel-2.png" alt="Papel" />
            <img id="papel-mobile" src="./Papel-Mobile.png" alt="Papel" />

            <div className="skills-grid">

                <h2 className="skill-titulo">Proyectos</h2>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn4.iconfinder.com/data/icons/casino-glyph-silhouettes/300/02416532Untitled-3-512.png" alt="BlackReact" />
                    </div>
                    <div className="skill-description">
                        <p className='negrita'> BlackJack en React </p>
                        <p className='margenleft'>Un mini-proyecto sobre el juego de BlackJack implementado en React.</p>
                        <a className='margenleft' href="https://github.com/VictorianoDL/Mini-Proyecto-BlackJack-En-React.git">Link al repositorio</a>
                    </div> 
                </div>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="./Agape - Logo AZUL Completo.png" alt="Agape" />
                    </div>
                    <div className="skill-description">
                        <p className='negrita'> Pagina de Donaciones </p>
                        <p className='margenleft'>Pagina de donaciones para la organización Agape</p>
                        <a className='margenleft' href="https://github.com/VictorianoDL/ProyectoFinal-Grupo4-FrontEnd.git">Link al repositorio</a>
                    </div> 
                </div>

            </div>
            
        </div>
    )
}
export default Proyectos