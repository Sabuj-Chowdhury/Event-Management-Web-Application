import Banner from "../components/Banner";
import Categories from "../components/Categories";
import EventSearch from "../components/EventSearch";
import FeaturedEvents from "../components/FeaturedEvents";
import HostEvent from "../components/HostEvent";
import TestimonialsAndStats from "../components/TestimonialsAndStats";

const HomePage = () => {
  return (
    <div>
      {/* hero/banner */}
      <Banner />
      <EventSearch />
      <FeaturedEvents />
      <Categories />
      <HostEvent />
      <TestimonialsAndStats />
    </div>
  );
};

export default HomePage;
