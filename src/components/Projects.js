import React from 'react';
import  '../styles/styleProjects.scss';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[]                          
    };
  }
  componentDidMount() {
    fetch('/projects')
      .then(res => res.json())
      .then(data => this.setState({data}, console.log('Customers fetched...', data) ));
      
  }

  render() {

      return(
      <div>
        {this.state.data.map(data =><div className="container-fluid infoProjects"  style={ {backgroundColor: data.colorBackground, backgroundSize: "cover"}} key={data.id}>
          <div className="row data" >
            <div className="col imagen" style={{backgroundColor: data.colorBackground }}>
              <img className="screen" src={data.image} alt=""></img>
            </div>
            <div  className="col  info" style={ {backgroundColor: data.colorBackground, color: data.colorText}}>
              <div className="col title"><h2>{data.title}</h2></div>
              <div className="col text"><p>{data.text}</p></div>
              <div className="col tags"><p>{data.tags}</p></div>
              <div className="col "> <button type="button" className="btn btn-primary" style={{color: data.colorBackground}}>VER DETALLES</button></div>      
            </div>
          </div>
        </div>)}
        </div>
      )

  }


}

export default Projects;
