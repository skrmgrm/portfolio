import ScrollToTop from "react-scroll-to-top";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./components/sass/styles.scss";
import Stack from "./components/stack/Stack";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="showcase">
      <div className="d-lg-none">
        <ScrollToTop
          smooth
          component={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          }
        />
      </div>
      <Navbar />
      <Main />
      <Stack />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
