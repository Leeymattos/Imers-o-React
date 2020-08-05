import React, { useState, useEffect } from 'react';
import Button from '../../../components/LinkBTN'
import PageDefault from '../../../components/pagedefault'
import { Link } from 'react-router-dom';
import './style.css'
import FormField from '../../../components/FormField';
import { FiArrowLeft } from 'react-icons/fi'
import {useForm} from '../../../hooks/useForm'





export default function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }

  const [categoria, setCategoria] = useState([])
  
  const {handleChange, values, clearForm} = useForm(valoresIniciais)


  
  

  useEffect(() => {

    const URL = window.location.hostname.includes('localhost')?
    'http://localhost:8080/categorias' : 'https://serverleeymattos.herokuapp.com/categorias';

    fetch(URL).then(async(respostaDoServidor) =>{
      const resposta = await respostaDoServidor.json()
      setCategoria([
        ...resposta,
      ])
    })
  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    setCategoria([
      ...categoria,
      values
    ])
    clearForm()
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={handleSubmit}>

        <div className='form-group'>

          <FormField
            label='Nome:'
            name='nome'
            type='text'
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label='Descrição:'
            name='descricao'
            type='textarea'
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label='Cor:'
            name='cor'
            type='color'
            value={values.cor}
            onChange={handleChange}
          />



          <Button as='button' type='submit' style={{ background: 'black'}}>
            Cadastrar
          </Button>
        </div>
      </form>

      {categoria.length === 0 &&(
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categoria.map((categoria, indice) => {
          return (
            <li key={`${categoria.nome}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>



      <Link to='/' className='Link-Group'>
        <FiArrowLeft width={20} color='#DB202C' />Ir para home
        </Link>


    </PageDefault>
  )
}