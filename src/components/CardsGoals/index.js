import {Container, Card} from './style';
import cardImageOne from '../../assets/cardImageOne.svg'
import cardImageTwo from '../../assets/cardImageTwo.svg'
import cardImageThree from '../../assets/cardImageThree.svg'


export default function CardsGoals(){

  return(

    <>

      <Container> 
        <Card>
          <img src={cardImageOne} alt=""/>
          <p> compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas.</p>
        </Card>

        <Card>
          <img src={cardImageTwo} alt=""/>
          <p>Realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais.</p>
        </Card>

        <Card>
          <img src={cardImageThree} alt=""/>
          <p>Promover a integração entre as ciências agrárias e a denominada Tecnologia da Informação (TI) com suas diversas subáreas.</p>
        </Card>
     

      </Container>
    </>
  );

}