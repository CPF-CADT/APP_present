import Place from "./components/Phones.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>avalibale Phones</h1>
        <p>Most sell phone in our shop</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {AVAILABLE_PLACES.map((element) => 
              <Place props={element}/>
            )}
            {/* For each place from AVAILABLE_PLACES, create a Place component */}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
