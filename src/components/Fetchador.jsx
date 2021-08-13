import React, {useEffect, useState} from "react";
import axios from "axios";
import './fetchador.css'

import { Input, Button } from '@material-ui/core';
const Fetchador = ({ urlInt , queryInt}) => {

    
    const { useState, useEffect } = React;
    const [rand, setRand] = useState('0');
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState(queryInt);
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(
        'https://game-of-thrones-quotes.herokuapp.com/v1/author/arya/0'
    );
    const [isLoading, setIsLoading] = React.useState(false);
    console.log("Rendering App");
    
    useEffect(() => {   // Handles the LifeCycle Events
      console.log("Fetching data...");
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
  
      fetchData();
    }, [url]);
    return (
      <div>
            <form className="form-horizontal"
                onSubmit={event => {
                    let randomic = String(Math.floor(Math.random() * 3));
                    setRand(randomic);
                    setUrl(`https://game-of-thrones-quotes.herokuapp.com/v1/author/${query}/${rand}`);
                    event.preventDefault();
                }}
            >
                <Input
                className='input-selector'
                value={query}
                inputProps={{
                    type: "text",
                    
                }}
                onChange={event => { setQuery(event.target.value) }}
                />
                <Button
                    className = 'button-selector'
                    type="submit"
                    color='secundary'
                    
                >Search</Button>
            </form>
  
        {isLoading ? (
                <div>Loading ...</div>
        ) : (
            <div>
                        { query.charAt(0).toUpperCase() + query.slice(1)} said: {data.sentence}
            </div>
        )}
      </div>
    );
}
        

export default Fetchador;