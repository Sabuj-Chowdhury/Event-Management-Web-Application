import SectionTitle from "./SectionTitle";
import {
  FaShieldAlt,
  FaRocket,
  FaHandsHelping,
  FaCalendarCheck,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket className="text-3xl text-accent" />,
    title: "Easy & Fast Setup",
    description:
      "Create and publish your events in minutes with our intuitive dashboard and tools.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-accent" />,
    title: "Smart Event Management",
    description:
      "Manage guests, track RSVPs, and automate reminders all from one place.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-accent" />,
    title: "Secure & Reliable",
    description:
      "Your data is protected with top-tier security and our platform is always available.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-accent" />,
    title: "Dedicated Support",
    description:
      "Our support team is here to help you at every step of your event journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle
          title="Why Choose Us"
          subtitle="EventEase offers everything you need to host, manage, and scale your events effortlessly"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-base-200 p-6 rounded-xl shadow text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-base-content text-opacity-70 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
