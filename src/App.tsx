import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div><div class="title-box"  >
        <a style={{ color: "#ffffff", textAlign: "center" }} >This is a title</a>
      </div>
      <div class="body-box" style={{ textAlign: "right" }} >
        This is a body
      </div>
      <div class="body-box" style={{ textAlign: "center" }} >
        This is a body
      </div>
      <div class="body-box" style={{ textAlign: "left" }} >
        This is a body
      </div>
      <div class="box-box"  >
        <div class="box"  >
          <div class="left"  >this is a list left</div>
          <div class="center"  >this is a list center</div>
          <div class="right"  >this is a list right</div>
        </div>
      </div></div>
  );
}

export default App;
