import './App.css';
import List from './components/List';
import Counter from './components/Counter';
import beagle from './assets/beagle.jpeg';
import bulldog from './assets/bulldog.jpeg';
import cocker_spaniel from './assets/cocker_spaniel.jpeg';
import german_shepherd from './assets/german_shepherd.jpeg';
import labrador from './assets/labrador.jpeg';

function App() {
  const pets = [
    {
      image: labrador,
      name: 'Goose',
      breed: 'Labrador',
      borderColor: 'red',
    },
    {
      image: bulldog,
      name: 'Rambo',
      breed: 'Bulldog',
      borderColor: 'blue',
    },
    {
      image: german_shepherd,
      name: 'Rex',
      breed: 'German Shepherd',
      borderColor: 'green',
    },
    {
      image: beagle,
      name: 'Charlie',
      breed: 'Beagle',
      borderColor: 'yellow',
    },
    {
      image: cocker_spaniel,
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
