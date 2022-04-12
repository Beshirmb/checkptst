import logo from './logo.svg';
import './App.css';
import Profile from "./Profile/Profile";

const array = ["Beshir","Meriam","Sarah","Achref","Youssef"];
const array1=[{name:"Beshir",profession:"developer"},{name:"Meriam",profession:"developer"}
,{name:"Sarah",profession:"developer"},{name:"Achref",profession:"developer"},{name:"Youssef",profession:"developer"}]


function App() {
  return (
    <div className="App">
      <ul>
        {array.map((el) => (
          <li>{el}</li>
        ))}
      </ul>

      <ul>
        {array1.map((el) => (
          <li>{el.name} : {el.profession}</li>
          
        ))}
      </ul>

    <Profile 
      fullName="Beshir Mbarki"
      Bio="Web-Developer"
      Profession="developer"
      >
    </Profile>

    </div>
  );

}
export default App;
