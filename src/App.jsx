import React from 'react'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Form from './components/Form'
import Stats from './components/Stats'

export default function App() {
  return (
    <div className='container'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}
