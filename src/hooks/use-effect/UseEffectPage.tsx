import { useEffect, useState } from "react";

const REFERENCES: Array<{ label: string; url: string }> = [
  {
    label: "Video Tutorial",
    url: "https://www.youtube.com/watch?v=0ZJgIjIuY7U",
  },
  {
    label: "Source Code",
    url: "https://github.com/Prateek-Yashaswi/learn-react/tree/master/src/hooks/use-effect/UseEffectPage.tsx",
  },
];

const UseEffectPage = () => {
  const [resourceType, setResourceType] = useState<string | undefined>(
    undefined
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState([]);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (resourceType !== undefined) {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    }
  }, [resourceType]);

  return (
    <div>
      <div>
        <h3>This Page Is For Understanding React useEffect Hook.</h3>
        <p>
          In first example, we are going to listen to the resize listener and
          change the value whenever we resize our window.
        </p>
        <p>
          In second example, we are going to make an api request to
          https://jsonplaceholder.typicode.com based on the selected resource
          type.
        </p>
        <h3>References</h3>
        <div style={{display: "flex", gap: 8}}>
          {REFERENCES.map((item, idx) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={idx}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <hr />
      <div>Current Window Width: {windowWidth}</div>
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
          }}
        >
          <p>Please Select a Resource Type</p>
          <button onClick={() => setResourceType("posts")}>Posts</button>
          <button onClick={() => setResourceType("users")}>Users</button>
          <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>

        <p>Fetching Data For Resource Type: {resourceType}</p>
        <a
          href={`https://jsonplaceholder.typicode.com/${resourceType}`}
          target="_blank"
          rel="noreferrer"
        >
          You Can Verify The Response From Here
        </a>
        <div>
          {items.map((item, idx) => (
            <pre key={idx}>{JSON.stringify(item)}</pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseEffectPage;
