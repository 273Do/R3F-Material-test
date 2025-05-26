import "./App.css";
import MainScene from "./Components/MainScene";

function App() {
  return (
    <div className="bg-black">
      <div className="fixed z-0">
        <MainScene />
      </div>
      <div className="absolute z-10 pointer-events-none">
        <div className="w-screen h-screen">
          <p className=" text-white">here is the main scene</p>
        </div>
        {/* <div className="w-screen h-screen border-t border-border/40 bg-background/9 backdrop-blur supports-[backdrop-filter]:bg-background/60"> */}
        <div className="w-screen h-screen bg-black">
          <p className="text-white">here is the main scene</p>
        </div>
      </div>
    </div>
  );
}

export default App;
