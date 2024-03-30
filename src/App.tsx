import './App.css';
import {Greet} from "./components/Greet"
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import {Heading} from './components/Heading'
import { Button } from './components/Button';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { Counter } from './components/class/Counter';
import {Box} from './components/context/Box'
import { MutableRef } from './components/ref/Mutable';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { Toast } from './components/templates/Toast';

function App() {
  const personName = {
    first: 'kjjj',
    last: 'khannn'
  }
  
  const personLists = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
   ]
  
  return (
    <div className="App">
     {/* <Button handleClick = {(event) => {
      console.log('button',event);
     }}></Button> */}
     {/* <Container styles={{backgroundColor: "plum",color:"white"}} /> */}
     {/* <LoggedIn /> */}
     {/* <Counter /> */}
     {/* <Box /> */}
     {/* <MutableRef /> */}
     {/* <Counter message="hii there"/> */}
     {/* <Private  isLoggedIn={true} component={Profile}/> */}
     {/* <List  items={['Batman','Superman','Wonder Woman']}
     onClick={(item) => console.log(item)}/> */}
     <Toast position = 'center'  />
    </div>
  );
}

export default App;
