import "./App.css";
import CompaniesPage from "./Components/CompaniesPage/CompaniesPage";
import ExplorePage from "./Components/Explore/ExplorePage";
import Header from "./Components/Header/Header";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import NewsletterPage from './Components/NewsletterPage/NewsletterPage';
import Footer from "./Components/Footer/Footer";
import TravelPoint from "./Components/TravelPoint/TravelPoint";

function App() {
  return (
    <div className="App">
      <Header />
      <ExplorePage />
      <CompaniesPage />
      <ServicesPage />
      <TravelPoint />
      <NewsletterPage />
      <Footer />
    </div>
  );
}

export default App;
