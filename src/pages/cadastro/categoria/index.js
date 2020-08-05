import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/pagedefault'
import { Link } from 'react-router-dom';
import './style.css'
import FormField from '../../../components/FormField';
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../../../components/Button'

export default function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }
  const [categoria, setCategoria] = useState([])
  const [values, setValues] = useState(valoresIniciais)


  useEffect(() => {
    const URL = 'http://localhost:8080/categorias'
    fetch(URL).then(async(respostaDoServidor) =>{
      const resposta = await respostaDoServidor.json()
      setCategoria([
        ...resposta,
      ])
    })
  }, [])

 

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,  //nome: "valor"
    })                 //descrição: "valor"
  }


  function handleSubmit(e) {
    e.preventDefault()
    setCategoria([
      ...categoria,
      values
    ])
    setValues(valoresIniciais)
  }
  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    )
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