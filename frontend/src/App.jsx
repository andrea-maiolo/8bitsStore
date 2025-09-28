import { useDispatch, useSelector } from "react-redux";
import "./custom.scss";
import { incrementTest } from "./redux/actions";

function App() {
  const cart = useSelector((state) => state.cart.test);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(incrementTest(1))}>count is {cart}</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
