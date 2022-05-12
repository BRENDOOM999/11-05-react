import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { FaCheck } from 'react-icons/fa'
import diciplinaValidator from './diciplinavalidator/diciplinaValidator';
import DisciplinaService from '../services/academico/DisciplinaService';


const Diciplina = () => {



  const { register, handleSubmit, formState: {errors} } = useForm();

  function salvar(dados){

    DisciplinaService.create(dados)

  }

  return (
    <div>
      <h1>Diciplina</h1>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text" {...register("name", diciplinaValidator.name)} />
            {errors.name && <span>{errors.name.mensagem}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Curso: </Form.Label>
            <Form.Control  type="text" {...register("curso", {required: true})} />
            {errors.curso && <span>{errors.curso.mensagem}</span>}
        </Form.Group>

        <div className='text-center'>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/>salvar</Button>
        </div>
      </Form>




    </div>
  )
}

export default Diciplina