import React from 'react'
import './index.css'
import {useLoginContext} from '../../UserProvider';
import {TmdbApiContext} from '../../contexts/TmdbApiContext'

export default function Fav (movie){
     console.log(TmdbApiContext)
    const {saveLogin} = useLoginContext();
    console.log(saveLogin)
  const handleClick = ()=> {
    alert(movie.id)
    // console.log(this.movie)
  }
    return <div className ='favButtons'>
        
        <button onClick={handleClick}><div className='heart'></div></button>
    
        </div>
  
}
