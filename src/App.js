import PeopleList from "./components/peopleList"
import './App.css';

function App() {
  let people = [
    {
      firstname: 'Juan',
      lastname: 'Torres',
      age: 15,
      hairColor: 'brown'
    },
    {
      firstname: 'Pepe',
      lastname: 'Torres',
      age: 18,
      hairColor: 'brown'
    },
    {
      firstname: 'Camilo',
      lastname: 'Torres',
      age: 20,
      hairColor: 'black'
    }
  ];
  return (
    <div className="App">
      <PeopleList people={people}/>
    </div>
  );
}

export default App;
