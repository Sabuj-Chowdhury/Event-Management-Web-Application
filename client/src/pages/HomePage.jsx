import Banner from "../components/Banner";
import Categories from "../components/Categories";
import EventSearch from "../components/EventSearch";
import FeaturedEvents from "../components/FeaturedEvents";

const HomePage = () => {
  return (
    <div>
      {/* hero/banner */}
      <Banner />
      <EventSearch />
      <FeaturedEvents />
      <Categories />
    </div>
  );
};

export default HomePage;
