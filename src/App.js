import "./App.css";
import About from "./components/about";
import Banner from "./components/banner";
import Events from "./components/events";
import Footer from "./components/footer";
import Header from "./components/header";
import News from "./components/news";
import Services from "./components/services";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Banner />
      <About />
      <Events />
      <News />
      <Footer />
    </div>
  );
}

export default App;
