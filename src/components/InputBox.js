import { useState } from "react";


const InputBox = () => {
const [username, setUsername] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username)

}

// const logInput = () => {
//     console.log
// }

    return ( 
    
        <form 
        onSubmit={handleSubmit}>
            <input  onChange={ (event) => {

setUsername(event.target.value)
console.log(setUsername)
} }  placeholder="username"></input>
            <input type="submit"></input>
        </form>
    
     );
}
 
export default InputBox;