import { useState, useEffect, useLayoutEffect } from "react";
import { Nav, Footer } from "./components/Layout.jsx";
import HomePage from "./pages/Home.jsx";
import WerkwijzePage from "./pages/Werkwijze.jsx";
import DienstenPage from "./pages/Diensten.jsx";
import InsightsPage from "./pages/Insights.jsx";
import OverOnsPage from "./pages/OverOns.jsx";
import ContactPage from "./pages/Contact.jsx";

const ROUTES = ["home", "werkwijze", "diensten", "insights", "over-ons", "contact"];

function parseHash() {
  const h = (window.location.hash || "").replace(/^#\//, "").toLowerCase();
  return ROUTES.includes(h) ? h : "home";
}

export default function App() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [route]);

  const navigate = (id) => {
    if (id === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = `#/${id}`;
  };

  let Page;
  switch (route) {
    case "werkwijze": Page = WerkwijzePage; break;
    case "diensten":  Page = DienstenPage;  break;
    case "insights":  Page = InsightsPage;  break;
    case "over-ons":  Page = OverOnsPage;   break;
    case "contact":   Page = ContactPage;   break;
    default:          Page = HomePage;
  }

  return (
    <>
      <Nav route={route} navigate={navigate}/>
      <main key={route} data-screen-label={route}>
        <Page navigate={navigate}/>
      </main>
      <Footer navigate={navigate}/>
    </>
  );
}
