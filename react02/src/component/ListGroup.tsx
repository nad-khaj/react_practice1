import { useState } from "react";
interface Props {
  items: string[];
  title: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, title, onSelectedItem }: Props) {
  const [selectedIndex, SetSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p> No Item found</p>}
      <ul className="list-group w-25">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              SetSelectedIndex(index);
              onSelectedItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
