import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useEffect} from 'react';
import './App.css';
import Movie from './Movie'

const API_URL = 'https://www.omdbapi.com?apikey=f7a8a8eb';

function App (){
    const [Movies, setMovies]= useState([])
    const [searchTerm, setSearchTerm]= useState(''); 
    const searchMovies = async (title) =>{
        // const response = await fetch('https://www.omdbapi.com/?apikey=f7a8a8eb&s=spiderman');
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); 
        console.log(data)
        setMovies(data.Search);
    }  
    useEffect(()=>{ 
        searchMovies("marvel")},[]);
 return(
    <div className='App'>
            <h1 className='Maintitle'> MovieLand </h1>
            <div className='Search'>
                <input
                className='searchinput'
                value={searchTerm}
                placeholder='Search for Movies'
                onChange={(e)=>{setSearchTerm(e.target.value)}}               
                />

                <FaSearch 
                className='Searchbtn'
                onClick={()=>{searchMovies(searchTerm)}}
                />
            </div>         
                {Movies?.length > 0 
                    ? (<div className='container'>
                        {
                        Movies.map((movie) => (
                        <Movie
                          films = {movie}
                        key = {Movies.imdbID} 
                        /> 
                        ))
                        }   
                    </div>): 
                    <div className='Empty'>
                        <h2>No Movies Found</h2>
                    </div>
                }    
    </div>
            );
        }
export default App
// f7a8a8eb