import styled from 'styled-components';
import {Form as Unform } from '@unform/web'

export const Container = styled.main`
display: flex;
width: 100%;
justify-content: space-between;

margin-top: 40px;
p{
  color: var(--text);
}
  


`;
export const InformationContact = styled.section`
address{
  width: 400px;
  padding: 20px;
  margin-top: 200px;
  color: rgba(177, 180, 196, 1);
}

`;

export const SectionForm = styled.section`
p{
  width: 100%;
  max-width: 350px;
  margin-left: 20px;
}

 

div{
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
  margin-right: 60px;
  flex-wrap: wrap;

 
}
`;

export const Maps = styled.section`
width: 100%;
border: none;
iframe{
  border: none;
}

`;

export const Form = styled(Unform)`

width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border: none;
  margin-left: 20px;
  
  
  input, label{
    
    width: 100%;
    max-width: 365px;
    
   
  }
  input{
    outline: none;
    border: 1px solid #dbdfea;
    border-top-color: white;
    border-left-color: white;
    border-right-color: white;
    margin-top: -10px;
    

  }

  label{
    color: rgba(177, 180, 196, 1);
    font-size: 1rem;
    padding-top: 20px;
    margin-bottom: 10px;
  }
  
  button{
    border-radius: 6px;
    border: none;
    padding: 5px 40px;
    background: var(--page);
    color: white;
    font-size: 1rem;
  }

`;