import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="title-box">
        <a style={{ color: "#ffffff", textAlign: "right" }}>This is a title</a>
      </div>
      <div className="body-box" style={{ textAlign: "center" }}>
        This is a body
      </div>
      <div className="body-box" style={{ textAlign: "center" }}>
        This is a body
      </div>
      <div className="body-box" style={{ textAlign: "left" }}>
        This is a body
      </div>
      <div className="box-box">
        <div className="box">
          <div className="left">this is a list left</div>
          <div className="center">this is a list center</div>
          <div className="right">this is a list right</div>
        </div>
      </div>
    </div>
  );
}

export default App;
