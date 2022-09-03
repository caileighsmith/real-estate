import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function AddExpense(props){
  const [openExpenseInput, setOpenExpenseInput] = useState(false)
  return<>
    <h3>Add expense</h3>
  </>
}



function NavBar(props){
  //Nav-bar component
  let viewProfile = <p>Log in/Register</p>
  if (props.loggedIn == true){
    viewProfile = <p>View profile</p>
  }
  return <>
    <div id='nav-bar'>
      <p>Home</p>
      {viewProfile}
      <p>Contact sales</p>
      <p>Search</p>
    </div>
  </>
}




function App() {

  const [isOnMainPage, setIsOnMainPage] = useState(true)

  return (<>
    <NavBar loggedIn={false} />
    <div className="App">
      
    </div>

    {isOnMainPage
      ? <div id='main'>
        <h1>Track your expenses with ease.</h1>
        <h2>Build the lifestyle you deserve.</h2>
        <AddExpense/>
      </div>
      : <div>Not on main</div>
    }
    </>
  );
}

export default App;
