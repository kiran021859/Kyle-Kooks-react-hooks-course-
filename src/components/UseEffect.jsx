import React,  {useEffect, useState}from 'react'
import './UseEffectStyle.css'

function UseEffect() {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize () {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    /**const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
       .then(response => response.json())
       .then(json => setItems(json))

    }, [resourceType])**/

  return (
    <>


    <div  className='h-screen flex flex-col bg-slate-600' id='text'>
        {windowWidth}
    </div>
    
    </>
  )
}

export default UseEffect

{/**
    <div className='h-screen flex flex-col bg-slate-600'>
        <div>
            <button onClick={() => setResourceType('post')} className='m-5'>Posts</button>

            <button onClick={() => setResourceType('users')} className='m-5'>Users</button>

            <button onClick={() => setResourceType('comments')} className='m-5'>Commenta</button>
        </div>
        <h1 id='text' className='m-5'>{resourceType}</h1>
        items.map(item => {
            return <pre>{JSON.stringify(items)}</pre>
        })
    </div> 
    **/}