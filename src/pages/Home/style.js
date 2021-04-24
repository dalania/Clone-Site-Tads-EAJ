import styled from 'styled-components';

export const Container = styled.main`

  width: 100%;
  text-align: center;
  align-items: center;

  h2{
    color: var(--text);
    font-size: 1.4rem;
    margin-top: 10px;
  }
  

`;

export const Apresentation = styled.section`
width: 100%;
background: var(--page);
display: flex;
flex-direction: column;
p{
  font-size: 1.2rem;
  color: white;
  text-align: center;
}

img{
  width: 300px;  
}

@media screen and (min-width: 800px){
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  p{
    
    margin-top: 100px;
    width: 700px;
    font-size: 2rem;
  }
  img{
  width: 400px;
}
}


`;

export const Goals = styled.section`

color: var(--text);
margin-top: 1rem;
`;

export const Diferrentials = styled.section`
width: 100%;
background: var(--page);
margin-top: 2rem;
color: white;

h2{
  padding-top: 1rem;
}
@media screen and (min-width: 800px){
  height: 363px;

}

`;

export const GeneralInformation = styled.section`
color: var(--text);
@media screen and (min-width: 800px){
  display: flex;
  justify-content: space-around;
}

`;

export const Ul = styled.ul`
margin-top: 60px;


`;

export const Li = styled.li`
font-size: 1.2rem;
line-height: 2rem;
padding-top: 20px;
list-style: none;

  span{
    
    color: #1E3779;

  }
  p{
    color: #B1B4C4;

  }

`;