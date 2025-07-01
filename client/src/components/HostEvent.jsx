import { Link } from "react-router";
import hostEvent from "../assets/eventHost.jpg";

const HostEvent = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-base-200 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Illustration or Placeholder Image */}
        <div className="flex-1">
          <img
            src={hostEvent}
            alt="Host an Event"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Host Your Own Event
          </h2>
          <p className="text-base-content text-opacity-80">
            Are you an organizer? Share your event with the world. EventEase
            makes it easy to create, manage, and promote events in just a few
            clicks.
          </p>
          <Link
            to="/create-event"
            className="btn btn-accent btn-wide text-white"
          >
            Start Hosting
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HostEvent;
