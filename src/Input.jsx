import React, { useState } from 'react'

function Input() {
    const [firuts, setFiruts] = useState("")
    function handleFirutChange(event){
        setFiruts(event.target.value);
        console.log(event.target.value);
    }
  return (
    <form>
        <input type="text" value={firuts} id="firut" onChange={handleFirutChange}  placeholder='Enter an item...'/>
        <p> Firut:{firuts}</p>
    </form>
  )
}

export default Input
