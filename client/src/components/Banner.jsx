import { Link } from "react-router";
import heroImg from "../assets/hero.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-base-200 px-4 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={heroImg}
          className="max-w-sm md:max-w-md rounded-lg shadow-lg"
          alt="Event Ease Hero"
        />

        {/* Left: Text + Buttons */}
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-5xl md:text-5xl font-bold text-primary">
            Discover, Join & Host Events
          </h1>
          <p className="py-2 text-base-content text-opacity-80">
            Welcome to{" "}
            <span className="font-semibold text-accent">EventEase</span> – your
            go-to platform to explore exciting events or host your own. Make
            every moment count!
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Link to="/events" className="btn btn-accent">
              Browse Events
            </Link>
            <Link to="/add-event" className="btn btn-outline btn-primary">
              Host an Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
