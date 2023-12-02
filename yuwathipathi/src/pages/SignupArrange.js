import {useState} from 'react';
import SignUp from './SignUp2';
import SignUp from './SignUp2';


const writing=()=>{
const [name, setName ] = useState();

console.log(name);
return(
    <div>
        <form >
            <FormInput placeholder="username" setName={setName}/>
            <FormInput placeholder="username"></FormInput>
            <FormInput placeholder="username"></FormInput>
            <FormInput placeholder="username"></FormInput>
        </form>
    </div>
);
}
export default writing;