import React, { createContext, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import("./containers/HomePage"));
const DetailPage = React.lazy(() => import("./containers/ProjectDetail"));
export const DataContext = createContext<any>(null);

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/resumeData.json`)
      .then((data) => data.json())
      .then((res) => {
        setState(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <DataContext.Provider value={state}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" component={DetailPage} />
          </Switch>
        </Suspense>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
