import { useEffect, useState } from "react";

function TrafficLight() {
  const [light, setLight] = useState(null);
  const [isAuto, setIsAuto] = useState(false);
  const [purple, setPurple] = useState(false);

  const changeLight = (color) => {
    setLight(color);
  };

  useEffect(() => {
    if (!isAuto) return;

    const lights = purple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];
    let index = 0;

    const interval = setInterval(() => {
      setLight(lights[index]);
      index = (index + 1) % lights.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [isAuto, purple]);

  const autoChange = () => {
    setIsAuto(!isAuto);
  };
  const showPurple = () => {
    setPurple(!purple);
  };
  


  return (
    <div className="flex flex-col items-center m-5">
      <div className="w-2 h-12 bg-black"></div>
      <div className="w-20 h-auto bg-black rounded-lg flex flex-col justify-around items-center p-2 shadow-xl space-y-3">
        <div
          className={`w-14 h-14 bg-red-600 rounded-full cursor-pointer transition-all duration-300 ${light === 'red' ? 'drop-shadow-[0_0_60px_rgb(255,0,0)]' : ''}`}
          onClick={() => changeLight('red')}
        ></div>
        <div
          className={`w-14 h-14 bg-yellow-500 rounded-full cursor-pointer transition-all duration-300 ${light === 'yellow' ? 'drop-shadow-[0_0_60px_rgb(255,255,0)]' : ''}`}
          onClick={() => changeLight('yellow')}
        ></div>
        <div
          className={`w-14 h-14 bg-green-600 rounded-full cursor-pointer transition-all duration-300 ${light === 'green' ? 'drop-shadow-[0_0_60px_rgb(0,255,0)]' : ''}`}
          onClick={() => changeLight('green')}
        ></div>
        {purple && (
          <div
            className={`w-14 h-14 bg-purple-600 rounded-full cursor-pointer transition-all duration-300 ${light === 'purple' ? 'drop-shadow-[0_0_60px_rgb(130,0,255)]' : ''}`}
            onClick={() => changeLight('purple')}
          ></div>
        )}
      </div>
      <button type="button" className="btn btn-primary mt-3" onClick={autoChange}>
        {isAuto ? "Stop Traffic Light" : "Activate Traffic Light"}
      </button>
      <button type="button" className="btn btn-warning mt-3" onClick={showPurple}>
        {purple ? "Hide purple light" : "Show purple light"}
      </button>
    </div>
  );
}

export default TrafficLight;