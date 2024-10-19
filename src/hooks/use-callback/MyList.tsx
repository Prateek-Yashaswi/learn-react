import { FC, useEffect, useState } from "react";

interface IList {
  getItems: (incrementor: number) => Array<number>;
}

const MyList: FC<IList> = ({ getItems }) => {
  const [items, setItems] = useState<Array<number>>([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating Items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, idx) => (
        <h3 key={idx}>{item}</h3>
      ))}
    </div>
  );
};

export default MyList;
