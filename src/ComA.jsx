import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA=()=>{
    const [num,setNum]=useState();
   const [name,setName]=useState();
   const [moves,setMoves]=useState();

    useEffect(()=>{
       async function getData(){   //async always expects function   //it waits until we get data
           const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

//we have diff pokemon characters data at different no in pokemon api
//so we give choice to user to select any no and so is the fetch

           console.log(res.data.name)
           setName(res.data.name);
           setMoves(res.data.moves.length);  //in data moves was an array with 81 moves so we get total no of elements
       }
       getData();
    });



    return( 
    <>
    <h1>You chose <span style={{color:'red'}}>{num} value</span></h1>
    <h1>My name is <span style={{color:'red'}}>{name}</span></h1>
    <h1>I have <span style={{color:'red'}}>{moves} moves</span></h1>
    
    <select value={num} onChange={(event)=>{
        setNum(event.target.value)

    }}>

    <option value="1">1</option>
    <option value="25">25</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>



    </select>

    </> 
);    
};

export default ComA;