import { useState } from "react";
import styles from "./ListGroup1.module.css";
import styled from "styled-components";

const Header = styled.h1`
  color: red;
  font-size: 25px;
  border: 2px dashed blue;
`;

interface Props {
  items: string[];
  title: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup1({ items, title, onSelectedItem }: Props) {
  const [selectedIndex, SetSelectedIndex] = useState(-1);
  return (
    <>
      <Header>{title}</Header>
      {items.length === 0 && <p> No Item found</p>}
      <ul className={[styles.menu, styles.menu_color].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              SetSelectedIndex(index);
              onSelectedItem(item);
            }}
            className={
              selectedIndex === index
                ? `${styles.list_group_item} ${styles.active}`
                : `${styles.list_group_item}`
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;
