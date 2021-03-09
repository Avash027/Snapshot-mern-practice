import React from 'react'
import "./Style.css"

const Bloginput = () => {
    return (
        <div>
         <div>
  <div className="input-div">
    <input type="text" name="Title" className="input-title" placeholder="Title" />
  </div>
  <div className="textarea-input-div">
    <textarea name="textarea" id cols={20} rows={10} className="input-text-area" placeholder="Description(Max 250 Characters)" defaultValue={""} />
  </div>
  <div className="input-button-div">
    <input type="submit" className="submit-button" />
  </div>
</div>

        </div>
    )
}

export default Bloginput
