import {useState} from 'react'


  export function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,  //nome: "valor"
    })                 //descrição: "valor"
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    )
  }

  function clearForm(){
    setValue(valoresIniciais)
  }
  
  return{
    handleChange,
    values,
    clearForm,
  }

}