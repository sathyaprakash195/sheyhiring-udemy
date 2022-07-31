import { useEffect, useState } from "react";
import CompanyInfo from "./components/CompanyInfo";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Numbers from "./components/Numbers";
import RecruitmentAreas from "./components/RecruitmentAreas";
import Specializations from "./components/Specializations";
import Splashscreen from "./components/Splashscreen";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
      sessionStorage.setItem("showSplashScreen", "false");
    }, 5000);
  }, []);

  return (
    <>
      {JSON.parse(sessionStorage.getItem("showSplashScreen")) !== false &&
        showSplashScreen && (
          <div className="absolute inset-0 bg-[#1C1C1C] h-screen w-screen flex items-center justify-center">
            <Splashscreen />
          </div>
        )}

      {!showSplashScreen && (
        <div className="mx-20 sm:mx-0">
          <div className="p-5">
            <Header />
            <Intro />
            <CompanyInfo />
            <Specializations />
            <RecruitmentAreas />
            <Numbers />
            <ContactUs />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
