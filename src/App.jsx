import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <SideBar />
          <Products />
        </div>
      </main>
    </>
  );
}

export default App;
