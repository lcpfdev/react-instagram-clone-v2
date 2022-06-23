import { useState } from "react";


const InputBox = () => {
const [username, setUsername] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username)
}
const handleChange = (event) => {
    setUsername(event.target.value)
}
return ( 
        <form  
        onSubmit={handleSubmit}>
            <input 
           onChange={ handleChange }  
            placeholder="username">
            </input>
            <input   type="submit"></input>
            
        </form>
    
     );
}
 
export default InputBox;