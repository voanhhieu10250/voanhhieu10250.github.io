import React, { createContext, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import("./containers/HomePage"));
const DetailPage = React.lazy(() => import("./containers/ProjectDetail"));
export const DataContext = createContext<any>(null);
export const ScreenContext = createContext<boolean>(false);

function App() {
  const [state, setState] = useState(null);
  const [phoneAccess, setPhoneAccess] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/resumeData.json`)
      .then((data) => data.json())
      .then((res) => {
        setState(res);
      })
      .catch((err) => console.log(err));
    if (window.innerWidth < 440) setPhoneAccess(true);
  }, []);

  return (
    <BrowserRouter>
      <DataContext.Provider value={state}>
        <ScreenContext.Provider value={phoneAccess}>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/detail/:id" component={DetailPage} />
            </Switch>
          </Suspense>
        </ScreenContext.Provider>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
