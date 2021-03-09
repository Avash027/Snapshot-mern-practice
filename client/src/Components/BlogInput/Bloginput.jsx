import React,{useState} from 'react'
import "./Style.css"

const Bloginput = () => {

  const [title, settitle] = useState("");
  const [desc , setDesc] = useState("");
  
  const handleSubmit =async ()=>{
    const ret =  await fetch("http://localhost:5000/api/save",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        title,
        description:desc
      })

    })

    const ret1 = await ret.text();
    console.log(ret1);
  }

    return (
        <div>
         <div>
          <div className="input-div">
          <input type="text" name="Title" className="input-title" placeholder="Title" value={title} onChange={(e)=>settitle(e.value)} />
          </div>
          <div className="textarea-input-div">
          <textarea name="textarea" id cols={20} rows={10} className="input-text-area" placeholder="Description(Max 250 Characters)" value={desc} onChange={(e)=>setDesc(e.value)} />
          </div>
          <div className="input-button-div">
          <input type="submit" className="submit-button" onClick={handleSubmit} />
          </div>
          </div>
        </div>
    )
}

export default Bloginput
