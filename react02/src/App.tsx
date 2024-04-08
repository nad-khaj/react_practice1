// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "bootstrap/dist/css//bootstrap.min.css";
import ListGroup from "./component/ListGroup";
import ListGroup1 from "./component/ListGroup1";
import Alert from "./component/Alert";
import Button from "./component/Button";
import { useState } from "react";
import Like from "./component/Like";
const list = ["Tehran", "London", "Istanbul", "Paris", "New York"];
const menus = ["Home", "Contact us", "About Us", "Products"];

function App() {
  const handleOnSelectedItem = (item: string) => console.log(item);

  const [visibility, setVisibility] = useState(false);

  return (
    <div className="container">
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>
          Hello <strong> Nadereh</strong>
        </Alert>
      )}

      <Button
        color="secondary"
        onClicked={() => {
          console.log("Clicked");
          setVisibility(!visibility);
        }}
      >
        My Button
      </Button>

      <ListGroup1
        items={menus}
        title="Menus"
        onSelectedItem={handleOnSelectedItem}
      ></ListGroup1>

      <ListGroup
        items={list}
        title="Cities"
        onSelectedItem={handleOnSelectedItem}
      ></ListGroup>

      <Like></Like>
    </div>
  );
}

export default App;
