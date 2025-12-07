import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-dvh w-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
