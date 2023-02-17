import './App.css';
import List from './components/List';
import Counter from './components/Counter';

function App() {
  const pets = [
    {
      image: 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1670938235.1927571/fun-facts-about-labrador-retrievers.jpg',
      name: 'Goose',
      breed: 'Labrador',
      borderColor: 'red',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/1200px-Bulldog_inglese.jpg',
      name: 'Rambo',
      breed: 'Bulldog',
      borderColor: 'blue',
    },
    {
      image: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
      name: 'Rex',
      breed: 'German Shepherd',
      borderColor: 'green',
    },
    {
      image: 'https://image.petmd.com/files/styles/863x625/public/2022-10/beagle-dog.jpg',
      name: 'Charlie',
      breed: 'Beagle',
      borderColor: 'yellow',
    },
    {
      image: 'https://media-be.chewy.com/wp-content/uploads/2021/05/05180433/Cocker-Spaniel_FeaturedImage-1024x615.jpg',
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
