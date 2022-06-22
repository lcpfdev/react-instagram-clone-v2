

const InputBox = () => {



   
    return ( 
    
        <form >
            <input placeholder="username"></input>
            <input placeholder="password"></input>
            <input placeholder="email"></input>
            <input type="submit"
            onSubmit={     
                () => {
                    console.log("hello")
                }
            }
            ></input>
        </form>
    
     );
}
 
export default InputBox;