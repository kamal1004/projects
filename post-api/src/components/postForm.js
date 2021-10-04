import React, {useState} from "react";
import Axios from "axios";

function PostForm(){
  const url="https://ptsv2.com/t/q4me0-1633333501/pos"
  const [data, setData]=useState({
    n1:"" ,
    n2:"",

  })
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      n1: parseInt(data.n1),
      n2: parseInt(data.n2)
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)

  }
  return(
    <div>
      <form onSubmit ={(e)=> submit(e)}>
          <input onChange={(e)=>handle(e)} id="n1" value={data.n1} placeholder="First number" type="text" ></input>
          <input onChange={(e)=>handle(e)} id="n2" value={data.n2} placeholder="Second number" type="text" ></input>
          <button>Submit</button>
      </form>
    </div>
  )
}
export default PostForm;
