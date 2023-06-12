import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/books", book)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='form'>
      <h1>Add a New Book</h1>
      <input className='input' type='text' placeholder='title' onChange={handleChange} name='title' />
      <input className='input' type='text' placeholder='desc' onChange={handleChange} name='desc' />
      <input className='input' type='number' placeholder='price' onChange={handleChange} name='price' />
      <input className='input' type='text' placeholder='cover' onChange={handleChange} name='cover' />
      <button className='formButton' onClick={handleClick} >Add</button>
    </div>
  )
}

export default Add
