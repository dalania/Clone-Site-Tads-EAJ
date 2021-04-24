import {Container, Card} from './style';
import startSvg from '../../assets/star.svg'
import teamSvg from '../../assets/team.svg'
import Agronomy from '../../assets/agronomy.svg'


export default function CardsDifferentiates(){
  return(
  
  <Container>

        <Card>
          <img src={startSvg} alt=""/>
          <p> Nota máxima atribuida pela avaliação do INEP</p>
        </Card>

        <Card>
          <img src={teamSvg} alt=""/>
          <p>Plano de curso atualizado.</p>
        </Card>

        <Card>
          <img src={Agronomy} alt=""/>
          <p>Projetos integrados com as Ciências Agrárias</p>
        </Card>

  </Container>
  );
}