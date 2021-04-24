import {Container} from './style';
import { Button, Accordion, Card } from 'react-bootstrap';
import Header from '../../components/Header';
import  Footer  from '../../components/Footer';

export default function Calendario(){

  return(

    <Container>
      <Header/>
      <h2> Calendário Acadêmico TADS</h2>
      <script 
        src="https://unpkg.com/react/umd/react.production.min.js">
      </script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          >
        </script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          >
          </script>
        <script>var Alert = ReactBootstrap.Alert;</script>
      <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                 TADS 2020.1
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>

                <table className="table table-bordered">
              <thead>
               <tr> 
                
            
               
                <th> Data</th>
                <th> Descrição</th>
               
              </tr>
              </thead>
          
              <tbody>
                <tr>
                  <td> 04/01/2021 à 11/01/2021</td>
                  <td> Matrícula para o período 2020.1</td>
                </tr>
                <tr>
                  <td> 18/01/2021 à 19/01/2021</td>
                  <td> Re-matrícula para o período 2020.1</td>
                </tr>
                <tr>
                  <td> 18/01/2021 </td>
                  <td >Início do período letivo 2020.1</td>
                  
                </tr>
                <tr>
                  <td> 25/01/2021 </td>
                  <td> Início do período trancamento de turma 2020.1</td>
                </tr>
                <tr>
                  <td> 19/02/2021</td>
                  <td> Término do período trancamento de turma 2020.1 </td>
                </tr>
                <tr>
                  <td> 30/04/2021</td>
                  <td> Término do período letivo 2020.1</td>
                </tr>
              </tbody>
          
              
            </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  TADS 2020.2
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>

                <table className="table table-bordered">
              <thead>
               <tr> 
                
            
               
                <th> Data</th>
                <th> Descrição</th>
               
              </tr>
              </thead>
          
              <tbody>
                <tr>
                  <td> 04/01/2021 à 11/01/2021</td>
                  <td> Matrícula para o período 2020.2</td>
                </tr>
                <tr>
                  <td> 18/01/2021 à 19/01/2021</td>
                  <td> Re-matrícula para o período 2020.2</td>
                </tr>
                <tr>
                  <td> 18/01/2021 </td>
                  <td colSpan="2">Início do período letivo 2020.2</td>
                  
                </tr>
                <tr>
                  <td> 25/01/2021 </td>
                  <td> Início do período trancamento de turma 2020.2</td>
                </tr>
                <tr>
                  <td> 19/02/2021</td>
                  <td> Término do período trancamento de turma 2020.2 </td>
                </tr>
                <tr>
                  <td> 30/04/2021</td>
                  <td> Término do período letivo 2020.2</td>
                </tr>
              </tbody>
          
              
            </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
        </Accordion>

        
        <Footer />

          
    </Container>
  );
}