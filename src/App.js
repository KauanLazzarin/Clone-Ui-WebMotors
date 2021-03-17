import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import BodySlide from "./components/Body-Slide/BodySlide";
import MostSearchedSlide from "./components/Most-Searched-Slide/MostSearchedSlide";
import FirstImage from './assets/first-slide-image.jpg';
import SecondImage from './assets/second-slide-image.jpg';
import ThirdImage from './assets/third-slide-image.jpg';
import FourthyImage from './assets/fourthy-slide-image.png';
import SearchBox from "./components/Search-Box/SearchBox";
import UsedCarsSlide from "./components/Used-Cars-Slide/UsedCarsSlide";
import News from "./components/News/News";

export default function App() {
  const HeaderSlides = [
    {
      id: 'firstImage',
      src: FirstImage
    },

    {
      id: 'secondImage',
      src: SecondImage
    },

    {
      id: 'thirdImage',
      src: ThirdImage
    },

    {
      id: 'fourthyImage',
      src: FourthyImage
    },
  ]

  return (
    <div className="App">
      <Header />
      <Slide slides={HeaderSlides} />
      <SearchBox />
      <BodySlide />
      <MostSearchedSlide />
      <UsedCarsSlide />
      <News />
    </div>
  );  
}
