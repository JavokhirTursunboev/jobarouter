import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Career, { CareerServer } from "./components/careers/Career";
import CareerError from "./components/careers/CareerError";
import Info, { careerDetailLoader } from "./components/careers/Info";

import Error from "./components/Error";
import Contact from "./components/help/Contact";
import Faq from "./components/help/Faq";
import Home from "./components/Home";
import CareerLayout from "./layout/Career-layout";
import Help from "./layout/Help-layout";
import Layout from "./layout/Layout";

const rounter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      {/* help part */}
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* help part end */}

      {/* Career */}
      <Route
        path="careers"
        element={<CareerLayout />}
        errorElement={<CareerError />}
      >
        <Route index loader={CareerServer} element={<Career />} />
        <Route path=":id" element={<Info />} loader={careerDetailLoader} />
      </Route>
      {/* End Career */}
      {/* Error 404 */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={rounter} />;
}

export default App;
