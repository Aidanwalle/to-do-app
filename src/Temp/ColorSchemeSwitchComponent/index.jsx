import "./index.css";

function App2() {
  return (
    <div>
      <div class="box theme-a">Theme A (initial)</div>
      <div class="box theme-a adaptive">
        Theme A (changed if dark preferred)
      </div>
      <br />

      <div class="box theme-b">Theme B (initial)</div>
      <div class="box theme-b adaptive">
        Theme B (changed if light preferred)
      </div>
      <br />
    </div>
  );
}
export default App2;
