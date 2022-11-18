import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function Remover(){
    let tempData= [];
    for(let i=0; i<=input.length; i++){
      console.log(input[i], ' char at i')
      if(input[i]!=' '){
         tempData.push(input[i])
      }
      else{
        tempData.push("_")
      }
    }
    setResult(tempData.join(""));
    
  }

  function Clear(){
    setResult("")
    setInput("")
  }

  return (
    <div>
       <div>
          <input 
          type='text'
          value={input}
          placeholder="Type something"
          onChange={(e)=>setInput(e.target.value)}
          className="bg-yellow-300"
          />
          <button className="bg-red-500 px-6 py-2 m-6" onClick={Remover}>Remover</button>
       </div>
       <div className='flex'>
        <div className='w-40 bg-blue-400'>{result}</div>
        <div className=''>
        <button className='ml-8 bg-green-400' onClick={Clear} >Clear</button>
        </div>
       </div>
    </div>
  )
}

export default Home
