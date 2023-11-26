import "./App.css";
import LargeWithLogoLeft from "./Component/FooterSocial";
import SmallWithLogoLeft from "./Component/Footericon";
import ImageText from "./Component/ImageText";
import WithSubnavigation from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <ImageText />
      <LargeWithLogoLeft />
      <SmallWithLogoLeft />
    </div>
  );
}

export default App;
