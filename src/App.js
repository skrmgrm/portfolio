import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./components/sass/styles.scss";
import Stack from "./components/stack/Stack";

function App() {
  return (
    <div className="showcase">
      <Navbar />
      <Main />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
