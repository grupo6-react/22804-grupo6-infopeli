import React from "react"
import './acercade.css'
import { AiFillGithub } from "react-icons/ai";

export const AcercaDe = () =>{

    const estudiantesNombres = {
        'Molina Angel David': 'Representante de proyecto',
        'Berruti Hector': 'Subrepresentante de proyecto',
        'Dunne Glenda': 'Desarrolladora Front-End',
        'Romero Virginia': 'Desarrolladora Front-End',
        'Arias Josiane': 'Desarrolladora Front-End',
        'Ghirardi Maximiliano': 'Desarrolladora Front-End',
        'Aguirre Matias': 'Desarrolladora Front-End',
    }

    const githubEstudiantes = [
        'https://github.com/molinaangeldavid',
        'https://github.com/TitoBerru',
        'https://github.com/Glenda76',
        'https://github.com/VirAyma21',
        'https://github.com/likejosiane',
        'https://github.com/mgmaxi',
        'https://github.com/MatiasAguirre26'
    ]

    const estudiantes = Object.keys(estudiantesNombres).map((element,index) => {
        return <li key={index} className='estudiantes-acercade'>{element} - {estudiantesNombres[element]} <a href={githubEstudiantes[index]} target='_blank'>  <AiFillGithub className="w"/></a></li>
    })

    return (
        <div className="container-acercade">
            <div className="subcontainer-acercade">
                <img src="" alt="" />
                <h2 className="h2-acercade">ACERCA DE NOSOTROS</h2>
                <hr />
                <div className="presentation-personal">
                    <h3>Desarrolladores</h3>
                    <p>Esta aplicacion web fue desarrollado por un grupo de estudiantes del programa Codo a Codo como proyecto integrador del curso de ReactJs. Entre los estudiantes a cargo del proyecto estan:
                    </p>
                    <ul>
                        {estudiantes}
                    </ul>
                </div>
                <div className="presentacion-pagina">
                    <h3>Sobre la pagina</h3>
                    <p>Aplicacion web desarrollada con ReactJs para que puedas visualizar la informacion y ademas el usuario pueda indicar cual es su favorita. Entre los detalles se haya la particularidad de que el usuario, una vez registrado y dentro del sistema, una vez logeado, puede marcar sus peliculas favoritas.</p>
                    <p>Ademas de usar ReactJs usamos Firebase como base de datos, la cual permite alojar los datos basicos de los usuarios y sus respectivos favoritos</p>
                </div>
            </div>
        </div>
    )
}