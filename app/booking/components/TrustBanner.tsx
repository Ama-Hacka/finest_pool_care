const items = [
  {
    icon: "verified",
    title: "Certified Professionals",
    body: "Licensed technicians specialized in luxury pool ecosystems.",
    phone: false,
  },
  {
    icon: "phone_in_talk",
    title: "Instant Assistance",
    body: "561-985-7468",
    phone: true,
  },
  {
    icon: "water_drop",
    title: "Eco-Friendly Care",
    body: "Sustainably sourced chemicals and energy-efficient systems.",
    phone: false,
  },
];

export default function TrustBanner() {
  return (
    <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {items.map(({ icon, title, body, phone }) => (
        <div
          key={title}
          className="glass-panel p-stack-md rounded-xl border border-outline-variant/30 flex flex-col items-center text-center"
        >
          <span className="material-symbols-outlined text-4xl text-secondary mb-2">
            {icon}
          </span>
          <h3 className="font-label-bold text-label-bold text-primary">{title}</h3>
          {phone ? (
            <a
              href="tel:5619857468"
              className="text-primary font-bold text-lg mt-1"
            >
              {body}
            </a>
          ) : (
            <p className="text-on-surface-variant text-sm mt-1">{body}</p>
          )}
        </div>
      ))}
    </div>
  );
}
