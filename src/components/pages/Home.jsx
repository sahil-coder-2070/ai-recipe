import Hero from "../layout/Hero";
import CardSection from "../layout/CardSection";
import Feature from "../layout/Feature";
import SearchBar from "../layout/SearchBar";
import Testimonials from "../layout/Testimonials";
import Newsletter from "../layout/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <CardSection />
      <Feature />
      <SearchBar />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
