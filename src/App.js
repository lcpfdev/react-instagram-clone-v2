import './App.css';
import { useEffect, useState } from 'react'
import PicDisplay from './components/PicDisplay';
import InputBox from './components/InputBox';

const  App = () => {

  const [pictures, setPictures] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() =>{ 
    handleFetch();
  }, []);

  const handleFetch = async () => { 
    const response = await fetch ('https://picsum.photos/v2/list?page=2&limit=3')
    // this converts from json 
    const data = await response.json();
    setPictures(data);
  }
  return (
    <div className='App'>
      <h1>PicDisplay</h1>
      {loggedIn && < PicDisplay pictures={pictures}/>} 
     
    </div>
  )
}
// Create a from input & submit which when clicked logs information to the console.
// Get the body to log out on the backend in the console using a fetch with a handle submit
// Get user from db and log it to console, then compare passwords, then log the result of b crypt . compae i
export default App;