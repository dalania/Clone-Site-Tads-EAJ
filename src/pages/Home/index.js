import Header from '../../components/Header'
import {Container, Apresentation, Goals, Diferrentials, GeneralInformation, Ul, Li} from './style'
import codingSvg from '../../assets/coding.svg'
import CardsGoals from '../../components/CardsGoals'
import CardsDifferentiates from '../../components/CardsDifferentiates';
import Footer from '../../components/Footer'

export default function Home(){

  return(
    
    <Container>
    <Header />

    <Apresentation>

      <p> Tecnologia em Analise e Desenvolvimento de Sistemas Universidade Federal do Rio Grande do Norte</p>
      <img src={codingSvg} alt=""/>

    </Apresentation>

    <Goals>
      <h2> Qual o objetivo do nosso curso?</h2>
      <CardsGoals />
    </Goals>

    
    <Diferrentials>
      <h2> Quais os Difencias do nosso curso?</h2>
      <CardsDifferentiates/>

    </Diferrentials>
    <h2> Informações Gerais</h2>

    <GeneralInformation>
      
      <Ul>
        <Li>  
          <span> Endereço Alternativo</span>
          <p> http://tads.eaj.ufrn.br/projects </p>
        </Li>
        <Li>  
          <span>Contato </span>
          <p> tads@ufrn.eaj.br </p>
        </Li>
      </Ul>

      <Ul>
        <Li>  
          <span> Ofertas de Vagas</span>
          <p> Primeiro semestre do ano letivo (40 vagas M/T) </p>
        </Li>
        <Li>  
          <span> Coordenação do Programa</span>
          <p>  Carla Costa Fernades Curvelo </p>
        </Li>
      </Ul>

    </GeneralInformation>
    <Footer />
   
     
   </Container>
    

   
    
  );
}