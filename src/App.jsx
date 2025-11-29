import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Hero />
      </main>
    </>
  );
}

export default App;
