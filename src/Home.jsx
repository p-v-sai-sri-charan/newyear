import "./App.css";
import Background from "./Background";
import imange from "./sl.png"
import "./custom.css"
import { useRoutes } from "react-router-dom";
function Home() {
    let {name} = useRoutes();
  return (
    <div className="w-screen h-screen">
      <Background />
      <div className="flex flex-wrap justify-center content-center w-full h-full">
        <div className="  backdrop-blur-xl bg-white/30 w-5/6 h-5/6">
          <div className="flex flex-warp justify-center content-center w-full h-4/6">
          <img src={imange} className="aspect-auto"/>
          
          </div>
          <div className="flex flex-warp justify-center content-center w-full">
            
          <span className="gold-text ">From</span>
          </div>
          <div className="flex flex-warp justify-center content-center w-full">
            
          <span className="gold-text text-center">{name}</span>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Home;

