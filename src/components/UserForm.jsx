import React from 'react'

const userForm = ({data, updateFielHandler}) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="">Nome: </label>
        <input type="text"
        name='name'
        id='name'
        placeholder='Digite seu nome'
        required
        value={data.name || ""}
        onChange={(e) => updateFielHandler("name", e.target.value)} // Método que permite as modificações dos valores do objeto original
         />
      </div>

      <div className="form-control">
        <label htmlFor="">E-mail: </label>
        <input type="email"
        name='email'
        id='email'
        placeholder='Digite seu e-mail'
        required
        value={data.email || ""}
        onChange={(e) => updateFielHandler("email", e. target.value)}
         />
      </div>
    </div>
  )
}

export default userForm