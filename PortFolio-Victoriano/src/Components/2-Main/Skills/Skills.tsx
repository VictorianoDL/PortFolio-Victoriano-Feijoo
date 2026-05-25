import './Skills.css'

const Skills = ()=>{
    return(
        <div id="skills-content">

            <img id="papel" src="./Papel-2.png" alt="Papel" />
            <img id="papel-mobile" src="./Papel-Mobile.png" alt="Papel" />

            <div className="skills-grid">

                <h2 className="skill-titulo">Habilidades</h2>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                    </div>
                    <div className="skill-description">
                        <p className='negrita'>HTML5</p>
                        <p className='margenleft'>Lenguaje de marcado utilizado para estructurar y presentar contenido en la web.</p>
                    </div>                   
                </div>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"></img>
                    </div>
                    <div className="skill-description">
                        <p className='negrita'>CSS3</p>
                        <p className='margenleft'>Lenguaje de estilo utilizado para definir la presentación de documentos HTML.</p>
                    </div>
                </div>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"></img>
                    </div>
                    <div className="skill-description">
                        <p className='negrita'>JavaScript</p>
                        <p className='margenleft'>Lenguaje de programación utilizado para crear contenido dinámico en páginas web.</p>
                    </div>
                </div>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"></img>
                    </div>
                    <div className="skill-description">
                        <p className='negrita'>React</p>
                        <p className='margenleft'>Librería de JavaScript para construir interfaces de usuario.</p>
                    </div>
                </div>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"></img>
                    </div>
                    <div className="skill-description">
                        <p className='negrita'>Node.js</p>
                        <p className='margenleft'>Entorno de ejecución de JavaScript del lado del servidor.</p>
                    </div>
                </div>

                <div className="skill-card">
                    <div className='skill-img'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"></img>
                    </div>
                    <div className="skill-description">
                        <p className='negrita'>Git</p>
                        <p className='margenleft'>Sistema de control de versiones distribuido.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Skills