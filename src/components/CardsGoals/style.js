import styled from 'styled-components';

export const Container = styled.div`

width:100%;
align-items: center;
margin-top: 4rem;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
text-align: center;

@media screen and (min-width: 800px){
  display: flex;
  flex-direction: row;
  width:100%;
  align-items: center;
  margin-top: 4rem;
  text-align: center;
  flex-wrap: wrap;

}


`;


export const Card = styled.div`
width: 100%;
height: 250px;
max-width: 370px;
background: var(--white);
border-radius: 6px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 1rem;
line-height: 2rem;
font-weight: 400;
margin-top: 20px;
p{
  text-align: center;

}


`;