import { useNavigate } from "react-router-dom";

type Links = {
  label: string;
  url: string;
};

const navLinks: Links[] = [
  { label: "Learn About useRef", url: "/hooks/useRef" },
];

const LandingPage = () => {
  const navigator = useNavigate();

  return (
    <div>
      <h3>
        Welcome, This React Application is intended to be used for sharing or
        learning concepts of react. Click on the links to proceed.
      </h3>

      <div
        className="links"
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {navLinks.map((item: Links, idx: number) => (
          <span
            onClick={() => navigator(item.url)}
            key={idx}
            style={{ cursor: "pointer", color: "blue", width: "fit-content" }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
