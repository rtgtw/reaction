

import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';







function App() {

  function handleSelect(selectedButton){


    console.log('Hello World' + selectedButton);
}


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcepts
              title="Components"
              description="The Core UI Building block"
              image={componentsImg}
            />

            {/* ... the spread operator pulls out each element within an array or object */}
            <CoreConcepts {...CORE_CONCEPTS[2]} />

            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect = {() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect = {() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect = {() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect = {() => handleSelect('State')}>State</TabButton>
          </menu>

        </section>


      </main>
    </div>
  );
}

export default App;
