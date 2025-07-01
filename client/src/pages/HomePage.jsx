import Banner from "../components/Banner";
import Categories from "../components/Categories";
import EventSearch from "../components/EventSearch";
import FeaturedEvents from "../components/FeaturedEvents";
import HostEvent from "../components/HostEvent";
import HowItWorks from "../components/HowItWorks";
import TestimonialsAndStats from "../components/TestimonialsAndStats";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturedEvents />
      <Categories />
      <HostEvent />
      <TestimonialsAndStats />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
