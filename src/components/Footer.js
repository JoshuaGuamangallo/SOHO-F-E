import React from 'react';
import  '../styles/styleFooter.scss';

class Footer extends React.Component {


  render() {
    return (
    <div className="container-fluid footer">
        <div className="row">
            <div className="col">

                <p className="soho"><b>@2017</b> SOHO internet + humana</p>

            </div>
            <div className="col">

                <p className="contact">Visítanos Escríbenos Llámanos</p>

            </div>
            <div className="col">

                <p className="social"><span className="facebook">Facebook</span><span className="twitter">Twitter</span>
                <span className="linkedin">Linkedin</span><span className="youtube">Youtube</span></p>

            </div>
        </div>

    </div>
    );
  }


}

export default Footer;
