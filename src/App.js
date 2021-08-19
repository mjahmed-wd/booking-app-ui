import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home/Home";
import { useState } from "react";
import SidebarNavigation from "./components/sidebar/SidebarNavigation";
import Header from "./components/header";
import "react-multi-carousel/lib/styles.css";
import MobileHeader from "./components/moblieHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  const [sidebarWidth, setChangeSidebarWidth] = useState(true);
  return (
    <Router>
      <Switch>
        <div className="d-flex">
          <div
            className={`d-none-mobile ${sidebarWidth ? "w-15 " : "w-5"}`}
            style={{
              height: "100vh",
              position: "sticky",
              top: "0",
              borderRight: "1px solid #EBF0F6",
            }}
          >
            <SidebarNavigation
              setChangeSidebarWidth={setChangeSidebarWidth}
              sidebarWidth={sidebarWidth}
            />
          </div>

          <div className={`main-data ${sidebarWidth ? "w-85 " : "w-95"}`}>
            <div className="d-none-mobile">
              <Header />
            </div>
            <div className="d-only-mobile">
              <MobileHeader />
            </div>

            <Route path="/book">
              <BookingPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="*">
              <h2>Page not found</h2>
            </Route> */}
            {/* <Home /> */}
          </div>
          {/* <Sidebar>
        <Home />
      </Sidebar> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
