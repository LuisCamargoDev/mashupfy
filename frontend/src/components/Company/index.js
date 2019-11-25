import React, { Component } from "react"//import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";

export default class Company extends Component {
    constructor() {
        super();
        this.state = {
          companyArr: "",
        };
      }
    
      async componentDidMount() {
        const token = localStorage.getItem("token");
        
        /* Retorna as empresas existentes */
        const companies = await fetch("http://localhost:3333/company", {
          headers: new Headers({ Authorization: `Bearer ${token}` })
        })
          .then(response => {              
            return response.json();
          })
          .catch(err => console.log(err));          

        this.setState({
            companyArr: companies,
        });
      }
    render(){
        return(
            <Container className="Company">
                <div className="header">
                    <h3 className="title_m">Black Friday <span>|</span> Promocao e Cashback</h3>                    
                </div>
                <div className="body text-center">
                    <Row>
                        {this.state.companyArr.data?
                            this.state.companyArr.data.map(company => (
                                <Col xs="3" className="card" key={company.id}>  
                                    <div className="imgCompany">  
                                        <img src={'img/'+company.file_img} alt=""/>                                                                             
                                    </div>
                                    <div className="bodyCompany">
                                        <h4><span className="green">2%</span> de volta</h4>
                                    </div>                        
                                </Col>
                            ))                        
                        :
                        'Vazio'
                        }                       
                    </Row>
                </div>                
            </Container>            
        );
    }
}