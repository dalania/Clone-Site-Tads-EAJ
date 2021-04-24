import Header from '../../components/Header';
import {Container, Table} from './style';
import {documentos} from './documentos';
import Footer from '../../components/Footer'
export default function Documentos(){
  return(
    <Container>
      <Header />

      <h2> Resoluções </h2>
      <Table>

        <thead>
          <tr>
            <th> Nome</th>
          </tr>
        </thead>

        <tbody > 
          {documentos.map((documento)=>(
              <tr key={documento.id}>
              <td> {documento.title}</td>
            </tr>

          ))}
        </tbody>

      </Table>

            <Footer />
    </Container>
  );

}