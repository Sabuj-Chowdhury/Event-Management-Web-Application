import { Link } from "react-router";
import hostEvent from "../assets/eventHost.jpg";
import SectionTitle from "./SectionTitle";

const HostEvent = () => {
  return (
    <section className="bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle
          title="Host Your Own Event"
          subtitle="Are you an organizer? Share your event with the world. EventEase makes it easy to create, manage, and promote events in just a few clicks."
        />

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
          {/* Text + Button */}
          <div className=" text-center lg:text-left space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              Turn Your Ideas Into Memorable Experiences
            </h3>
            <p className="text-base-content text-opacity-80 max-w-md">
              Whether it's a tech summit, workshop, or community meetup — our
              tools help you streamline registrations, promote your event, and
              engage attendees.
            </p>
            <Link
              to="/create-event"
              className="btn btn-accent btn-wide text-white"
            >
              Start Hosting
            </Link>
          </div>

          {/* Image */}
          <div className="">
            <img
              src={hostEvent}
              alt="Host an Event"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostEvent;
