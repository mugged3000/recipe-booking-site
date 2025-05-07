
import Navbar from './component/Navbar'
import Mainsection from './pages/Home'
import './App.css';
import FoodCard from './component/Avaliablefood'
import BurgerCard from './pages/About'
import ChefCookers from './pages/Cookers'
import StepByStepInstructions from './component/Steps'
import FooterSection from './component/Footer'
function App(){
  return(
    <>
    <Navbar />
    <Mainsection />
    <FoodCard />
    <BurgerCard />
    <ChefCookers />
    <StepByStepInstructions />
    <FooterSection />
    </>

  )
}
export default App;