import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./website/About";
import Game from "./website/Game";
import NavbarSection from "./website/NavbarSection";
import News from "./website/News";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <NavbarSection />
      <Routes>
        <Route>
          <Route path="/" element={<Game />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>

      <Toaster
        toastOptions={{
          style: {
            background: "#fff",
            color: "#000",
            fontFamily: "  Poppins, sans-serif",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
