import { useState } from "react";
import Gallery from "./components/Gallery";
import Button from "./components/Button";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <div className="Navbar">
        <Button
          btnTextCont="show / hide"
          onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}
        />
      </div>
       <Hero/>
      <Gallery visibility={isGalleryVisibile} />
      <hr />
    </div>
  );
}

export default App;
