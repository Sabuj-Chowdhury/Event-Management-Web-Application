const TestimonialsAndStats = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-primary">10K+</h3>
            <p className="text-base-content text-opacity-70">Events Hosted</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">50K+</h3>
            <p className="text-base-content text-opacity-70">Users Joined</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">120+</h3>
            <p className="text-base-content text-opacity-70">Cities Covered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">99%</h3>
            <p className="text-base-content text-opacity-70">
              Positive Reviews
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-accent">What People Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ayesha R.",
                feedback:
                  "EventEase made it so easy to manage registrations and communicate with attendees. I loved the experience!",
              },
              {
                name: "Rajat S.",
                feedback:
                  "From small meetups to large conferences, EventEase is my go-to platform. Beautiful UI and seamless UX.",
              },
              {
                name: "Tanya M.",
                feedback:
                  "I’ve tried many platforms but none as smooth and intuitive as EventEase. Highly recommended!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-base-200 p-6 rounded-xl shadow text-left"
              >
                <p className="italic text-base-content mb-4">“{t.feedback}”</p>
                <h4 className="font-semibold text-primary">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndStats;
