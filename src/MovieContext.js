import React,{useState,createContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider=(props)=>{
    const [movies,setMovies]=useState([
        {
            name:'Harry Potter',
            price:'Rs.200',
            id:1
        } ,
        {
            name:'X-Men',
            price:'Rs.100',
            id:2
        } ,
        {
            name:'hunger game',
            price:'Rs. 111',
            id:3
        } 
       ]);
    return(
<MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
</MovieContext.Provider>
    );
}