import Banner from "../components/Banner";
import EventSearch from "../components/EventSearch";
import FeaturedEvents from "../components/FeaturedEvents";

const HomePage = () => {
  return (
    <div>
      {/* hero/banner */}
      <Banner />
      <EventSearch />
      <FeaturedEvents />
      {/* Why Choose Us (Optional) */}
    </div>
  );
};

export default HomePage;
