import React from 'react';
import  '../styles/styleInfoUS.scss';
class InfoUs extends React.Component {


  render() {
    return (
        <div className="container-fluid info">
            <div className="row experience" >
                <h2>17 años de experiencia en pos de tu proyecto</h2>
                <hr/>
                <pre>
                {`Expecializados desde 1996 en usabilidad, experiencia del usuario(ux) y diseño de experiencia de proyectos digitales. Aportamos 
                    estrategias e innovación centrada en el usuario y los objetivos de negocio de tu proyecto. Cotrabajando mejoraremos tu tasa de
                    conversión, KPI's, ROI y los resultados de tu actual publicidad PPC (pay per click)`}
                </pre>
            </div>
            <div className="row cardsInfo" >
                <div className="col">
                    <div className="card strategiesCard" >
                    <div className="card-body">
                        <h5 className="card-title">Estrategia, usabilidad & UX</h5>
                        <pre className="card-text">
                        {`Te ofrecemos excelente usabilidad y 
experiencia del usuario en tu proyecto, 
junto a una vision innvadora.`}
                        </pre>

                    </div>
                    </div>

                </div>
                <div className="col">
                <div className="card experienceCard" >
                    <div className="card-body">
                        <h5 className="card-title">Mejoramos la experiencia</h5>
                        <pre className="card-text">
                        {`Tangibilizamos tu proyecto digital a 
través de un diseño centrado en el 
usuario y técnicas avanzadas`}
                        </pre>

                    </div>
                    </div>
                </div>
                <div className="col">
                <div className="card objectiveCard" >
                    <div className="card-body">
                        <h5 className="card-title">Medición continua de objetivos</h5>
                        <pre className="card-text">
                        {`Implementación, testing con usuarios
y medición continua son necesarias
para garantizar el éxito de tu proyecto`}
                        </pre>

                    </div>
                    </div>
                </div>
            </div>

            <div className="row projects" >
                <h2>Proyectos destacados</h2>
                <hr/>
                <pre>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lectus ac sem ullamcorper sodales. Ut ipsum quam, 
mollis vitae purus non, tristique viverra nisi. Curabitur efficitur magna sit amet nunc dapibus tempus`}
                </pre>
            </div>

        </div>
    );
  }


}

export default InfoUs;
