import "./styles.css";
import DivRef from "./DivRef";

export default function App() {
  const divs = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="App">
      {divs.map((divString, index) => (
        <DivRef key={index}>{divString}</DivRef>
      ))}
    </div>
  );
}
