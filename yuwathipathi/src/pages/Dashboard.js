import React from 'react'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import {useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';


const Dashboard =()=>{

    
        const history = useHistory()
        const [quote, setQuote] = useState('');
        const [tempQuote, setTemptQuote] = useState('')

       async function populateQuote(){
            const req = await fetch('http://localhost:1337/api/quote',{
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            const data = await req.json()
             if( data.status ==='ok'){
                setQuote(data.quote)
             }else{
                alert(data.error )
             }
            console.log(data);
        }
        useEffect(() =>{
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login')
            }
            else{
                populateQuote()
            }
        }


    },[])

    async function updateQuote(event){

        event.preventDefault()
        const req = await fetch('http:/localhost:1337/api/quote',{
            methods: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body:JSON.stringify({
                quote: tempQuote,
            }),
        })
        const data = req.json()
        if(data.status === 'ok'){
            setQuote(tempQuote)
            setTemptQuote('')
            
         }
            else{
                alert(data.error)
                    
                }
            }
        
    
    return (
    <div>
        <h1>Your quote: {quote || 'No quote found'}</h1>
        <form onSubmit={updateQuote}>
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