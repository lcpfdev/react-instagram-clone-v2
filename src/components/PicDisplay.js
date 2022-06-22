const PicDisplay = ({pictures}) => {

    return ( 
        <div>
      
            {pictures.map((pic, index   )=> (
                    <div key={index} >
                         <h2>{pic.author}</h2>
                         <img className='imageContainer' src = {pic.download_url} alt = "random"/>
                       </div>
            ))}
        </div>
     );
}
 
export default PicDisplay;