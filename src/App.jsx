import './App.css';
import List from './components/List';
import Counter from './components/Counter';

function App() {
  const pets = [
    {
      image: './public/labrador.jpeg',
      name: 'Goose',
      breed: 'Labrador',
      borderColor: 'red',
    },
    {
      image: './public/bulldog.jpeg',
      name: 'Rambo',
      breed: 'Bulldog',
      borderColor: 'blue',
    },
    {
      image: './public/german_shepherd.jpeg',
      name: 'Rex',
      breed: 'German Shepherd',
      borderColor: 'green',
    },
    {
      image: './public/beagle.jpeg',
      name: 'Charlie',
      breed: 'Beagle',
      borderColor: 'yellow',
    },
    {
      image: './public/cocker_spaniel.jpeg',
      name: 'Remi',
      breed: 'Cocker Spaniel',
      borderColor: 'orange',
    },
  ];
  return (
    <>
      <div className="App flex flex-col gap-8 w-1/3 mx-auto my-10">
        <section className="pet-list-section">
          <h2 className="text-lg font-medium mb-2">Pet List</h2>
          <List items={pets} />
        </section>
        <section className="counter-section">
          <h2 className="text-lg font-medium mb-2">Counter</h2>
          <Counter />
        </section>
      </div>
    </>
  );
}

export default App;
