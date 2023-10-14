import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/help/Contact";
import Faq from "./components/help/Faq";
import Home from "./components/Home";
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
    </Route>
  )
);

function App() {
  return <RouterProvider router={rounter} />;
}

export default App;
