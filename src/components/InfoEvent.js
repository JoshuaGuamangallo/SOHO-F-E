import React from 'react';
import Event from '../assets/img/Event.PNG';
import  '../styles/styleInfoEvent.scss';

class InfoEvent extends React.Component {

  render() {
    return(
        <div className=" ">
            <div className=" event ">
                <p><img src={Event} alt="logo soho"/> &nbsp;&nbsp; <b>EN DIRECTO</b>- SOHO está presente en <b>DIGITALBANK MONTEVIDEO.</b> "Experiencia de usuario" por Alfaro Añon (seo de Soho). &nbsp;&nbsp; <button type="button" className="btn btn-primary">VER EVENTO</button>&nbsp;&nbsp; <button type="button" className="btn btn-outline-primary">PRÓXIMOS EVENTOS</button></p>
            </div>
        </div>
    );
  }

}

export default InfoEvent;
