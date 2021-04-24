import styled from 'styled-components';

export const Container = styled.main`

h2{
  text-align: center;
  color: var(--text);
  font-size: 1.5rem;
  padding: 1.125rem;
}
.table{
  width: 60%;
  text-align: left;
  border-spacing: 0 0.5rem;

}

.table th{
  font-weight: 400;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
  padding: 1rem 2rem;
  color: #495057;
  
  
}
.table td{
  border: 0;
  padding: 1rem 2rem;
  color: #495057;


}

@media screen and (min-width:800px){
  h2{
    text-align: left;
  }

}

`;
