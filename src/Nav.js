import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav =()=>{
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div>
            <h1>Name of developer:Sushmita</h1>
    <h2>Number of Movies:{movies.length}</h2>
        </div>
    );
}
export default Nav;