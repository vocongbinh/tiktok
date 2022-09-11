import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter, privateRouter } from "~/Routes";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import Home from '~/pages/home'
// import OnlyHeader from '~/components/Layout/OnlyHeader'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRouter.map((route, index) => {
            let Layout = DefaultLayout
            const Page = route.component;
            if(route.layout){
              Layout = route.layout
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                   <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
