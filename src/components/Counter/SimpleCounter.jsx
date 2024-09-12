import React , {useState , useEffect} from 'react'

function SimpleCounter() {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
      // execute effect 
      console.log('SimpleCounter mounted successfully')
    
      return () => {
        console.log('SimpleCounter unmounted successfully')
        // cleanup del efect code here
        // this will be executed when SimpleCounter is unmounted
      }
    }, [count])
    
    
  return (
    <>
   <p></p> 
    
    <button onClick={() => setCount(count + 1)}>Click Me {count}

    </button>
    </>
    
  )
}

export default SimpleCounter