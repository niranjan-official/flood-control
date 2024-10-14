import { useEffect, useState } from "react";
import Gauge from "./Gauge";
import { db } from "./firebase";
import { onValue, ref } from "firebase/database";

function App() {
  const [value, setValue] = useState(0);
  const MAX_DISTANCE = 50; // Maximum distance

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const starCountRef = ref(db, "distance");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const percentage = Math.max(
          ((MAX_DISTANCE - data) / MAX_DISTANCE) * 100,
          0
        );
        setValue(percentage);
      }else{
        setValue(0);
      }
    });
  };

  return (
    <div className="w-screen overflow-x-hidden">
      <section id="home" className="h-screen overflow-hidden">
        <header className="p-4 bg-white text-black md:px-16 z-50 relative">
          <h1 className="text-3xl font-bold">Flood Control System</h1>
        </header>
        <div className="h-full w-full flex items-center p-4 pb:16 md:p-16 pt-0 home-bg text-white">
          <div className="flex flex-col">
            <h2 className=" text-4xl md:text-5xl text-white font-bold">
              Automated Flood <br /> Control System
            </h2>
            <p className="text-lg md:text-2xl max-w-lg mt-4">
              "Our System Enables You to Determine the Flood level of the Water
              body in No Time"
            </p>
            <a href="#status" className="w-fit p-2 mt-4 px-6 text-xl bg-red-600">
              View Status
            </a>
          </div>
        </div>
      </section>
      <section
        id="status"
        className="w-full h-screen overflow-hidden mt-8 bg-zinc-900 p-8"
      >
        <div className="flex h-full flex-col items-center text-center text-white">
          <h3 className="text-3xl font-bold">Flood Status</h3>
          <p className="mt-2 text-neutral-100">
            The data shown below is the water level in percentage
          </p>
          <hr className="w-full my-4" />
          <div className="flex h-full items-center">
            <Gauge value={value} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
