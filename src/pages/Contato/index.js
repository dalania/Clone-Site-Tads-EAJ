import React, {useRef} from 'react';
import * as Yup from 'yup';
import { Form } from './style'


import {Container,InformationContact, SectionForm, Maps} from './style';
import Header from '../../components/Header'

import Input from './input';
export default function Contato(){


  const formRef = useRef(null);

  async function handleSubmit(data, {reset}){

    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('O email é obrigatório'),

        assunto: Yup.string().min(5, 'No mínino 5 caracteres')
          .required('O assunto é obrigatório'),

        mensagem: Yup.string().min(5, 'No mínino 5 caracteres')
            .required('A mensagem é obrigatória'),

      });
      await schema.validate(data, {
        abortEarly: false,
      })

      formRef.current.setErrors({})
        reset();

    }catch(err){
      if(err instanceof Yup.ValidationError ){
        const errorMessages = {

        };

        err.inner.forEach(error =>{
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);

      }
    }

  }

  return(
    <>
    <Header />
    

    <Container>
      
      <InformationContact>
      <SectionForm>
      <p> Entre em contato com a coordenação do Curso para mais informações.</p>
      
        <Form ref={formRef} onSubmit={handleSubmit}> 
          <label> Email </label>
          <Input type="email" name="email" />
          <label> Assunto </label>
          <Input type="text" name="assunto"/>
          <label> Mensagem </label>
          <Input type="text" name="mensagem"/>
          <div> 
          <button> Enviar</button>

          </div>
    </Form>

      </SectionForm>
      
      <address> 
      Endereço: Rodovia RN 160, Km 03 s/n Distrito de, Macaíba - RN, 59280-000  

      </address>



      </InformationContact>

      <Maps>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.78860825087!2d-35.368332284777246!3d-5.885300959587743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b251bf1759f1e3%3A0x9ff31b727281ce2!2sEAJ%2FUFRN%20-%20Esc.%20Agr%C3%ADcola%20de%20Jundia%C3%AD%20-%20Ens.%20T%C3%A9c.%20e%20Sup.!5e0!3m2!1spt-BR!2sbr!4v1619053568773!5m2!1spt-BR!2sbr"
        width="90%" 
        height="650"
        loading="lazy"
        title="iframe maps"
        >
          

          </iframe>

      </Maps>
    </Container>
  


    </>
    
  );
}