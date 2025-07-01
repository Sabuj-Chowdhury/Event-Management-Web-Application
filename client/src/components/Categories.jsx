import {
  FaMusic,
  FaLaptopCode,
  FaPaintBrush,
  FaHeartbeat,
  FaCamera,
  FaGlobe,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const categories = [
  { name: "Music", icon: <FaMusic />, color: "bg-pink-200" },
  { name: "Tech", icon: <FaLaptopCode />, color: "bg-blue-200" },
  { name: "Art", icon: <FaPaintBrush />, color: "bg-purple-200" },
  { name: "Health", icon: <FaHeartbeat />, color: "bg-red-200" },
  { name: "Photography", icon: <FaCamera />, color: "bg-yellow-200" },
  { name: "Culture", icon: <FaGlobe />, color: "bg-green-200" },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto py-5 m-10 px-4 md:px-8 bg-base-100">
      <SectionTitle
        title="Explore by Interest"
        subtitle="Discover events tailored to your passions and hobbies."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center p-4 rounded-lg ${cat.color} hover:scale-105 transition-transform cursor-pointer shadow-md`}
          >
            <div className="text-3xl text-primary">{cat.icon}</div>
            <p className="mt-2 font-medium text-black text-sm">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
