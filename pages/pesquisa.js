import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
<<<<<<< HEAD
    Nota: 0
  })



=======
    Nota: '',
    Sugestao: ''
  })
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
<<<<<<< HEAD
    //alert('Você ja pode sorrir AGORA')
    //return 1


=======
    alert('Você ja pode sorrir AGORA')
    //return 1
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
<<<<<<< HEAD

=======
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    } catch (err) {
    }

  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value

    }))

  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value

    }))

  }
  return (

    <div className='p-4'>
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Siga nas Redes Sociais</h1>
      <h1 className='text-center font-bold my-4 text-2xl'> Agendado com Sucesso</h1>
      <p className='text-center mb-6'>
        texto de instrução.<br />
        ...
      </p>
      {!sucess && <div className='w-1/5 mx-auto '>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
<<<<<<< HEAD
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Endereço:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Nota:</label>



=======
        <label className='font-bold'>E-mail:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Sugestao:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Sugestao' onChange={onChange} name='Sugestao' value={form.Sugestao} />
        <label className='font-bold'>Nota:</label>
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
        <div className=' flex py-5 '>
          {notas.map(nota => {
            return (
              <label className=' block w-1/6 text-center'>
                {nota}<br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>
            )
          })
          }
        </div>

<<<<<<< HEAD


        <button className='bg-blue-400 px-6 py-4 font-bold rounded shadow-lg hover:underline' onClick={save}>Salvar</button>
      </div>}




      {sucess && <div className='w-1/5 mx-auto '>
        <p className=' mb-6 text-center bg-green-100 border-t border-b border-green-500 text-green-700 py-3'>Obrigado por constribuir com sua sugestão ou crítica.</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2 '>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao Barbeiro. </span>
          </div>
        }
      </div>
      }




      <PageTitle title='Pesquisa' />
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Siga nas Redes Sociais</h1>
=======
        <button className='bg-blue-400 px-6 py-4 font-bold rounded shadow-lg hover:underline' onClick={save}>Salvar</button>
        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>
      </div>}
      {
        sucess && <div className='w-1/5 mx-auto '>
          <p className=' mb-6 text-center bg-green-100 border-t border-b border-green-500 text-green-700 py-3'>Obrigado por constribuir com sua sugestão ou crítica.</p>
          {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
              Seu cupom: <br />
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
              <span className='font-bold block mb-2 '>{retorno.Promo}</span>
              <br />
              <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon. </span>
            </div>
          }
        </div>
      }
      <PageTitle title='Pesquisa' />
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    </div >
  )
}
export default Pesquisa