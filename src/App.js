import React ,{useEffect, useState} from 'react'
import axios from 'axios';


export default function App() {
  const [ImageUrl,setImageUrl]= useState("");
  
  useEffect(()=>{
    callApi()
  },[])

const callApi = ()=>{
  axios.get("https://api.thecatapi.com/v1/images/search").then((response)=>{
    setImageUrl(response.data[0].url)
  }).catch((error)=>{console.log(error)
  })
}



  return (
    <div>
      <p>The image URL: {ImageUrl}</p>
      <img src={ImageUrl} alt='cat' width={200} height={200}></img>
      <br></br>
      <button onClick={callApi}>New Image?</button>

    </div>
  )
}
