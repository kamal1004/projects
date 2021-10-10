import React, {useState} from "react";
import Axios from "axios";



function PostForm(){
  const url="https://getpantry.cloud/apiv1/pantry/bd119e09-40af-4668-adae-3f270fc9886f/basket/add"
  const [data, setData]=useState({
    n1:"" ,
    n2:"",
    opt:"",
  })
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      n1: parseInt(data.n1),
      n2: parseInt(data.n2),
      opt:(data.opt)
    })
    .then(res=>{
      console.log(res.data)
    })
    // Axios.get('http://localhost:5000/ans')
    // .then(response => alert("The answer is " + response.data.d))
    // .catch(error => {
    //   console.log({ errorMessage: error.message });
    //     console.error('There was an error!', error);
    // });
  }
  function man(e){
    Axios.get('http://localhost:5000/ans')
    .then(response => alert("The answer is " + response.data.d))
    .catch(error => {
      console.log({ errorMessage: error.message });
        console.error('There was an error!', error);
    });
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
          <h2><i>BASIC CALCULATOR</i></h2>
          <br /><label><b>Enter the first Number :  </b></label>
          <input onChange={(e)=>handle(e)} id="n1" value={data.n1} placeholder="First number" type="text" ></input><br /><br />
          <label><b>Enter the second Number : </b> </label>
          <input onChange={(e)=>handle(e)} id="n2" value={data.n2} placeholder="Second number" type="text" ></input><br /><br />
          <label><b>Choose the Operator : </b></label>
          <select id="opt" value={data.opt} onChange={(e)=>handle(e)}><br />
            <option value="add">+</option>
            <option value="Subtract">-</option>
            <option value="Multiply">*</option>
            <option value="Divide">/</option>
          </select><br /><br />
          <button>Submit</button>
          <br />
          <h4>To get answer click here:</h4>
          <button onClick ={(e)=>man(e)}>Answer</button>



      </form>
    </div>
  )
}
export default PostForm;
