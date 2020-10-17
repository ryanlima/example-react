import React from 'react'

const Nome = ({ nome, sobrenome, idade }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <h2>{sobrenome}</h2>
      <h3>{idade}</h3>
      <h3>{!idade && 'Não informado'}</h3>
      <button className="btn btn-primary">Click</button>
      <hr/>
    </div>
  )
}

export default Nome