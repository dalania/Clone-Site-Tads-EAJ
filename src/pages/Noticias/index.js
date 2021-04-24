import Header from '../../components/Header';
import {Container, Table} from './style';
import {noticias} from './dados';
import Footer from '../../components/Footer'
export default function Noticias(){
  return(
    <Container>
      <Header />

      <h2> Notícias</h2>
      <Table>

        <thead>
          <tr>
            <th> Data</th>
            <th> Título</th>
          </tr>
        </thead>

        <tbody > 
          {noticias.map((noticia)=>(
              <tr key={noticia.id}>
                <td> {noticia.data}</td>
                <td>  {noticia.title}</td>
            </tr>

          ))}
        </tbody>

      </Table>

            <Footer />
    </Container>
  );

}