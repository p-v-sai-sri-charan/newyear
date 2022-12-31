import "./App.css";
import Background from "./Background";
import imange from "./sl.png";
import "./custom.css";
import { useParams } from "react-router-dom";
import GetName from "./GetName";
import ShareButtons from "./ShareButtons";
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet";

function App() {
  let { name } = useParams();
  const [scrollPosition, setScrollPosition] = useState(0);
  let [names, setNames] = useState(name === undefined || "" ? "World" : (localStorage.getItem("name") === null ? name : localStorage.getItem("name")));

  // Use the useEffect hook to add an event listener to the scroll event
  useEffect(() => {
    // Get the window object
    const windowObject = window;

    // Add an event listener to the scroll event
    windowObject.addEventListener("scroll", () => {
      // Get the current scroll position
      const newScrollPosition = windowObject.pageYOffset;

      // Update the state variable with the new scroll position
      setScrollPosition(newScrollPosition);
    });

    // Remove the event listener when the component is unmounted
    return () => windowObject.removeEventListener("scroll", () => {});
  }, []);

  // Use a ternary operator to determine if the share button should be displayed
  const showButton = true//scrollPosition > 0 ? true : false;

  return (
    <div className="w-screen h-screen">
      <Helmet>
                <meta charSet="utf-8" />
                <title>{`Happy New Year 2023 ~`+ names }</title>
                <link rel="canonical" href={window.location.href} />
                <meta name="description" content="Happy New Year 2023" />
                <meta name="keywords" content="Happy New Year 2023" />
                <meta name="author" content="SriCharan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Happy New Year 2023" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={imange} />
                <meta property="og:description" content="Happy New Year 2023" />
                <meta property="og:site_name" content="Happy New Year 2023" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Happy New Year 2023" />
                <meta name="twitter:description" content="Happy New Year 2023" />
                <meta name="twitter:image" content={imange} />
                <meta name="twitter:site" content="@Happy New Year 2023" />
            </Helmet>
      <Background />
      <div>{showButton && <ShareButtons />}</div>
      <div className="flex flex-wrap justify-center content-center w-full h-full">
        <div className="  backdrop-blur-xl bg-white/30 w-5/6 h-5/6">
          <div className="flex flex-warp justify-center content-center w-full h-4/6">
            <img src={imange} className="aspect-auto" />
          </div>
          <div className="flex flex-warp justify-center content-center w-full">
            <span className="gold-text text-4xl">Happy New Year</span>
          </div>
          <div className="flex flex-warp justify-center content-center w-full">
            <span className="gold-text text-3xl ">From</span>
          </div>
          <div className="flex flex-warp justify-center content-center w-full">
            <span className="gold-text text-3xl text-center">{names}</span>
          </div>
        </div>
      <GetName />
      </div>
    </div>
  );
}

export default App;
