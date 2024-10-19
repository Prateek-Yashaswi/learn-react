import { FC } from "react";
import { TLinks } from "../types/TLinks";

interface ILinks {
  items: TLinks[];
}

const Links: FC<ILinks> = ({ items }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h2>References</h2>
      {items.map((link, idx) => (
        <div>
          <a
            key={idx}
            href={link.url}
            rel="noreferrer"
            target="_blank"
            style={{ width: "fit-content", color: "blue" }}
          >
            <span>{link.label}</span>
          </a>
          {link.additionalText ? <span> - {link.additionalText}</span> : null}
        </div>
      ))}
    </div>
  );
};

export default Links;
