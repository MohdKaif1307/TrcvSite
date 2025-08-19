import { SITE_CONFIG } from "@/lib/constants";

export function Stats() {
  const stats = [
    { value: SITE_CONFIG.stats.events, label: "Events Delivered" },
    { value: SITE_CONFIG.stats.cities, label: "Cities Covered" },
    { value: SITE_CONFIG.stats.attendees, label: "Attendees Reached" },
    { value: SITE_CONFIG.stats.satisfaction, label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
