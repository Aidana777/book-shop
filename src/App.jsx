import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <section>
        <h1>Our Books</h1>
        <div>
          <Card 
          isInStock={true}
          title="The Dead Romantics"
          image="./img/The Dead Romantics.jpg"
          priceOld={900}
          price={600}
          />

        </div>
      </section>
    </div>
  );
}

export default App;
