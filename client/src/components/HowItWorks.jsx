import SectionTitle from "./SectionTitle";
import { FaCalendarPlus, FaBullhorn, FaUsers } from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarPlus className="text-3xl text-accent" />,
    title: "Create Your Event",
    description:
      "Fill out the event details—name, date, time, location, and description. It's fast and easy!",
  },
  {
    icon: <FaBullhorn className="text-3xl text-accent" />,
    title: "Promote Effortlessly",
    description:
      "Reach your audience through our platform and social sharing tools to boost visibility.",
  },
  {
    icon: <FaUsers className="text-3xl text-accent" />,
    title: "Engage Attendees",
    description:
      "Track RSVPs, manage guests, and keep your attendees informed every step of the way.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-base-200 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle
          title="How It Works"
          subtitle="A simple process to create, share, and manage your events"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center space-y-4"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-base-content text-opacity-70 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
