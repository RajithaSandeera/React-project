import React from 'react'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import {useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';


const Dashboard =()=>{
    
        const navigate = useNavigate()
        const [quote, setQuote] = useState('');
        const [tempQuote, setTemptQuote] = useState('')
    
    return (
    <div>
        <h1>Your quote: {quote || 'No quote found'}</h1>
        <form >
            <input
             type = "text"
             placeholder="Quote"
             value={tempQuote}
             onChange={(e) => setTemptQuote(e.target.value)}></input>
            <input type="submit" value="Update quote"/>
        </form>
        </div>)
}
export default Dashboard