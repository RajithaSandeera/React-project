import {useState} from 'react';
import SignUp from './SignUp2';
import SignUp from './SignUp2';


const writing=()=>{
const [username, setUsername ] = useState();

console.log(username);
return(
    <div>
        <form >
            <FormInput placeholder="username" setUsername={setUsername}/>
            <FormInput placeholder="username"></FormInput>
            <FormInput placeholder="username"></FormInput>
            <FormInput placeholder="username"></FormInput>
        </form>
    </div>
);
}
export default writing;