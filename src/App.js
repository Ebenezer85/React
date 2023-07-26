import logo from './logo.svg';
import './App.css';
import Introductions from './components/Introductions';
import Students from './components/Students';
import Buttons from './components/Buttons';
 

const App = () => {
  const fruits = ['Apple', 'Pineapples', 'grapes', 'Banana', 'Carrot']


  return (
    <div>
      <header className="App-header">
        <h1>Ebenezer is a React Developer</h1>
        <p>I love {fruits[0]}</p>
        <ol>
          {fruits.map((element, index) => (
          <li key={index}> {element} </li>
          ))} 
        </ol>
      </header>

      {/* <Introductions username = 'Ezekiel Uwan' school ='Saint Finbars'/> */}


      {/* <Introductions username = 'Isreal Daniel' school ='Unilag'/> */}


      {/* <Introductions username = 'Takor' school ='Yaba Tech'/> */}


      <Buttons />

      

      {/* <Students /> */}

      <div>
          <Buttons>Signup</Buttons>

          <Buttons>Login</Buttons>
        </div>


    </div>
  );
}

export default App;
