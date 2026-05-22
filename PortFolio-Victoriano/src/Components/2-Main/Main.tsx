import { useEffect, useState, useRef } from "react";
import "./Main.css"
import SobreMi from "./SobreMi/SobreMi";
import Skills from "./Skills/Skills";
import Proyectos from "./Proyectos/Proyectos";
import Contacto from "./Contacto/Contacto";
import RandomBox from "../RandomBox/RandomBox";

const Main = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const ref1 = useRef<any>(null);
    const ref2 = useRef<any>(null);
    const ref3 = useRef<any>(null);
    const ref4 = useRef<any>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("sm");

    const handleClick = () => {
        if (isMenuOpen) {
            switch (activeTab) {
                case "sm":
                    // ref1.current.style.display = "none";
                    ref2.current.style.display = "none";
                    ref3.current.style.display = "none";
                    ref4.current.style.display = "none";
                    break;
                case "sk":
                    ref1.current.style.display = "none";
                    // ref2.current.style.display = "none";
                    ref3.current.style.display = "none";
                    ref4.current.style.display = "none";
                    break;
                case "pr":
                    ref1.current.style.display = "none";
                    ref2.current.style.display = "none";
                    // ref3.current.style.display = "none";
                    ref4.current.style.display = "none";
                    break;
                case "co":
                    ref1.current.style.display = "none";
                    ref2.current.style.display = "none";
                    ref3.current.style.display = "none";
                    // ref4.current.style.display = "none";
                    break;
            }
            setIsMenuOpen(false);
        }else{
            ref1.current.style.display = "block";
            ref2.current.style.display = "block";
            ref3.current.style.display = "block";
            ref4.current.style.display = "block";
            setIsMenuOpen(true);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [isOpen]);

    return(
        <div id="main">

            <div id="main-content-left">

                <div id="content-titulo">
                    
                    {/* <div className="imagenFondo">
                        <RandomBox/>
                    </div> */}

                    <div className="titulo">
                        <div>
                            <h1>Port</h1>
                            <h1>Folio</h1>
                        </div>
                        <div>
                            <h3>By</h3>
                            <h3>Victoriano</h3>
                            <h3>Feijoo</h3>
                        </div>
                    </div>
                    
                    <div className="bienvenida">
                        <p>Bienvenidos a mi Portfolio, aquí encontraran información sobre mí, mis habilidades, algunos de mis proyectos e información para contactarme.</p>
                    </div>

                </div>

            </div>

            <div id="main-linea-center"></div>
            
            <div id="main-content-right">

                <div id="content-archivos">

                    <div id="archivo" onClick={()=> {setIsOpen(true), setActiveTab("co")}}>
                        <h3>Contacto</h3>
                        <img id="cuerpo"  className="violetaImg4" src="./Archivo-Cuerpo.png"  alt="archivo" />
                    </div>
                    <div id="archivo" onClick={()=> {setIsOpen(true), setActiveTab("pr")}}>             
                        <h3>Proyectos</h3>
                        <img id="cuerpo"  className="violetaImg3" src="./Archivo-Cuerpo.png"  alt="archivo" />
                    </div>
                    <div id="archivo" onClick={()=> {setIsOpen(true), setActiveTab("sk")}}>  
                        <h3>Skills</h3>        
                        <img id="cuerpo"  className="violetaImg2" src="./Archivo-Cuerpo.png"  alt="archivo" />
                    </div>
                    <div id="archivo" onClick={()=> {setIsOpen(true), setActiveTab("sm")}}>  
                        <h3>Sobre Mi</h3>    
                        <img id="cuerpo"  className="violetaImg1" src="./Archivo-Cuerpo.png"  alt="archivo" />
                    </div>

                </div>
                
            </div>

            {isOpen && (
                <>
                    <div className="modal-overlay">
                        
                        <div className="modal-content">

                            <div id="close-Modal" onClick={() => {setIsOpen(false); setIsMenuOpen(false)}}></div>
                            <div id="menu-Modal" onClick={() => handleClick()}></div>

                            <div className="modal-tabs">

                                <div className={`tab ${activeTab === "sm" ? "tabActivo" : ""}`} ref={ref1}>
                                    <img id="cuerpo"  className="violetaImg1" src="./Archivo-Pestaña2.png"  alt="archivo" />
                                    <h2 onClick={() => setActiveTab("sm")}>Sobre Mi</h2>
                                </div> 

                                <div className={`tab ${activeTab === "sk" ? "tabActivo" : ""}`} ref={ref2}>
                                    <img id="cuerpo"  className="violetaImg2" src="./Archivo-Pestaña2.png"  alt="archivo" />
                                    <h2 onClick={() => setActiveTab("sk")}>Skills</h2>
                                </div>

                                <div className={`tab ${activeTab === "pr" ? "tabActivo" : ""}`} ref={ref3}>
                                    <img id="cuerpo"  className="violetaImg3" src="./Archivo-Pestaña2.png"  alt="archivo" />
                                    <h2 onClick={() => setActiveTab("pr")}>Proyectos</h2>
                                </div>

                                <div className={`tab ${activeTab === "co" ? "tabActivo" : ""}`} ref={ref4}>
                                    <img id="cuerpo"  className="violetaImg4" src="./Archivo-Pestaña2.png"  alt="archivo" />
                                    <h2 onClick={() => setActiveTab("co")}>Contacto</h2>
                                </div>

                            </div>

                            <form className="modal-form">
                                <img id="cuerpo" src="./Archivo-Cuerpo2 - copia.png" alt="archivo" className="violetaImg1" />
                                {activeTab !== "sm" &&
                                    <img id="cuerpo" src="./Archivo-Cuerpo2.png" alt="archivo" 
                                        className={`violetaImg${activeTab === "sk" ? "2" : activeTab === "pr" ? "3" : activeTab === "co" ? "4" : ""}`}
                                    />
                                }

                                {activeTab === "sm" && <SobreMi/>}
                                {activeTab === "sk" && <Skills/>}
                                {activeTab === "pr" && <Proyectos/>}
                                {activeTab === "co" && <Contacto/>}

                            </form>
                            
                        </div>
                        
                    </div>
                    
                </>
            )}
        </div>
    )
}
export default Main