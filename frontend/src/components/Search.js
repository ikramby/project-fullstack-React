import React, { useState } from 'react'
const Search = ({setProductName}) => {
    const [input, setInput] = useState("")
   
    const handelChange=(e)=>{
        setInput(e.target.value);
        
        
    }
    return (
        <div className='searchForm'>
            <input type="text" placeholder="recherche" value={input} className='search' onChange={handelChange}/>
            <button className='searchButton' onClick={()=>{setProductName(input);
            setInput("")
            }}>&#x1F50E;</button>
        </div>
    )
}
export default Search