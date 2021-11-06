import React from 'react';
import Logo from '../assets/img/logo.png';
import HomeBackground from '../assets/img/HomeBackground.jpg';
import  '../styles/styleHome.scss';

class Home extends React.Component {


  render() {
    return(
        <div className="container-fluid home" style={{ backgroundImage: `url(${HomeBackground})`, weight:"100%", height:"90vh", backgroundRepeat  : 'no-repeat', backgroundPosition: 'center',
        backgroundSize: 'cover',}}>
            <div className="row  containerMenu" >
                <div className="col-1 logo">
                    <img src={Logo} alt="logo soho"/>
                </div>
                <div className="col-5 uno ">
                </div>
                <div className="col-6  menu">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Casos de exito</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Únete al equipo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Contacto</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="row message align-items-center"  >
                <div className="row text ">
                    <h1 className="textOne">Nos especializamos en</h1>
                    <h1 className="textTwo">interfaces digitales que los usuarios aman</h1>
                </div>
                <div className="row-2">
                    <button type="button" className="btn btn-primary">HABLEMOS DE TU PROYECTO</button>
                </div>
            </div>

        </div>

    );
  }
}

export default Home;
