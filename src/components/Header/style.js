import styled from 'styled-components';


export const HeaderSite =  styled.header`
  width: 100%;
  height: 100%;
  background: #2F3A60;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-weight: 400;


  img{
    width: 60px;
    margin: 0 auto;
    margin-top: 20px;
}

  @media screen and (min-width: 800px){
    height: 60px;
    flex-direction: row;
    justify-content: space-between;

    img{
      margin: 0;
      width: 40px;
      margin-left: 8rem;
    }

  }


`;

export const Nav =  styled.nav`
padding: 10px;
@media screen and (min-width: 800px){
  margin-right: 8rem;
}





`;

export const Ul =  styled.ul`

 @media screen and (min-width: 800px){
   display: flex;
   
    
  }


`;

export const Li =  styled.li`
  color: var(--white);
  font-size: .8rem;
  padding: 10px;
  list-style: none; 
  .active{
      color: var(--white);
    }
  
  a{
    color: #939393;
    
    
    
    text-decoration: none;
  }
 
  
`;
