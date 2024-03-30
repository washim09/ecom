import Blog from "./pages/Blog";
import ComboOffer from "./pages/ComboOffer";
import Counter from "./pages/Counter";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import LetCustomerOurVoice from "./pages/LetCustomerOurVoice";
import MainHome from "./pages/Home";
import OurBestSeller from "./pages/OurBestSeller";
import ProblemAndSolution from "./pages/ProblemAndSolution";
import ProductCategorie from "./pages/ProductCategorie";
import Review from "./pages/Review";
import TagLineOne from "./pages/TagLineOne";
import TagLineThree from "./pages/TagLineThree";
import TagLineTwo from "./pages/TagLineTwo";
import WhyChooseUS from "./pages/WhyChooseUs";
import ContactUs from "./pages/ContactUs"

function App(){
  return(
    <div className="App">
      <Home />
      <WhyChooseUS />
      <ProblemAndSolution />
      <ProductCategorie />
      <LetCustomerOurVoice />
      <TagLineOne />
      <OurBestSeller />
      <Review />
      <TagLineTwo />
      <ComboOffer />
      <Counter />
      <TagLineThree />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App;