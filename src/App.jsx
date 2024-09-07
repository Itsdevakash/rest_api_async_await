import { useState ,useEffect } from "react"
import 'font-awesome/css/font-awesome.min.css'
const App=()=>{

  const [photos,setPhotos] = useState([])
  const [loading ,setloading] = useState(false)

  useEffect(()=>{
    test()
  },[])
//promise
  const test= async()=>{
    setloading(true)
 try{
const response = await  fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
const data = await response.json()
console.log('success',data)
setPhotos(data)
setloading(false)

}
catch(err){
 console.log('erroe',err)
}

  }

  return(
    <div style={{ alignItems:"center" }}>
    <h1>AKASH</h1>
    <button 
    style={{ 
      border:"none",
      padding:20,
      margin:"10px 0",
      color:"#fff",
      background:"blue",
      borderRadius:5
     }}
    
    
    
    onClick={test}>Test</button>
    <div style={{ 
      marginTop:100,
      width:'80%'
     }}>

      {
        loading && 
        <div>
          <i className="fa fa-spinner fa-spin" style={{fontSize:'48px',color:'red',marginTop:-25}}></i>
          </div>
      }
      <br></br>
      {
        photos.map((item,index)=>(
          <div 
          key={index}
          style={{ 
            border:"1px solid #ccc",
            padding:16,
            boxShadow:'0 0 10px #ddd',
            background:'#fff',
            borderRadius:5,
          }}>
            <h3>{item.title.slice(0 ,20)}</h3>
            <img src={item.thumbnailUrl} alt={item.id}/>
        
          </div>
        ))
      }

    </div>
   
    </div>
  )
}

export default App