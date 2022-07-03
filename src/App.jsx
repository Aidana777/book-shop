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
          <Card />

        </div>
      </section>
    </div>
  );
}

export default App;
