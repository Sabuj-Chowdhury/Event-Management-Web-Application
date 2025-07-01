import Banner from "../components/Banner";
import Categories from "../components/Categories";
import EventSearch from "../components/EventSearch";
import FeaturedEvents from "../components/FeaturedEvents";
import HostEvent from "../components/HostEvent";

const HomePage = () => {
  return (
    <div>
      {/* hero/banner */}
      <Banner />
      <EventSearch />
      <FeaturedEvents />
      <Categories />
      <HostEvent />
    </div>
  );
};

export default HomePage;
