import React from 'react'
import "./Style.css"
import delButton from "./assets/x-mark.png"


const Blogs = ({data}) => {

  console.log(data)

  let elem="Fetching data ..."

  if(data.length!==0){
   elem =  data.map(({title,description},idx)=>{
        return( <div className="todo-item" key={idx}>
      <div className="todo-title">{title}
        <img src={delButton} alt="noimg" height="20px" width="20px" style={{float: 'right'}}  />
      </div>
      <div className="todo-body">{description}
      </div>
      </div>
      )
  })
}

    return (
        <div>
    <div className="todo-container">
    {elem}
  </div>
</div>

    )
}

export default Blogs
