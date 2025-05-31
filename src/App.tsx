import "./App.css";
import MainScene from "./Components/MainScene";

function App() {
  return (
    <div className="relative w-screen h-screen bg-black">
      <div className="w-full h-full absolute inset-0 z-0 ">
        <div className="w-full h-full  mx-auto px-10 flex items-center flex-col">
          <p className="text-slate-100 font-bold text-[17vw]">Back_Area1</p>
        </div>
        <div className="w-full h-full bg-black px-10 ">
          <p className="text-slate-100 font-bold text-[17vw]">Back_Area2</p>
        </div>
      </div>

      <div className="fixed inset-0 z-10 pointer-events-none">
        <MainScene />
      </div>

      <div className="w-full h-full absolute inset-0 z-20 opacity-a80 pointer-events-none">
        <div className="w-full h-full  mx-auto px-10 flex items-end">
          <p className="text-slate-100 font-bold text-[17vw] ">Front_Area1</p>
        </div>
        <div className="w-full h-full flex items-end px-10 ">
          <div>
            <p className="text-slate-100 font-bold text-[17vw]">Front_Area2</p>
            <button
              className="bg-white font-bold  pointer-events-auto"
              onClick={() => console.log("click")}
            >
              test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
