import styled from 'styled-components';

export const Container = styled.div`

width:100%;
align-items: center;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
text-align: center;


@media screen and (min-width: 800px){
  
  flex-direction: row;
  width:100%;
  align-items: center;
 
  text-align: center;
  flex-wrap: wrap;
  margin-top: 80px;

}



`;


export const Card = styled.div`
width: 100%;
height: 250px;
max-width: 370px;
font-size: 1rem;
line-height: 2rem;
font-weight: 400;
/* margin-top: 20px; */
p{
  text-align: center;
  color: white;

}
img{
  width: 60px;
}

@media screen and (min-width: 800px){}
`;