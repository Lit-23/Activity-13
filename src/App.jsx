import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const title = "Activity 13 - React Components, Props, and useState!";
  const copyright = "© 2023 BASE404. All rights reserved."
  return (
    <main className='min-vh-100 d-flex flex-column'>
      <Header title={title} />
      <Counter />
      <Footer copyright={copyright} />
    </main>
  )
}

export default App
