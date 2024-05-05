import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/body/Body.jsx";
import LiveProject from "./components/projects/live/LiveProject.jsx";
import About from "./components/about/About.jsx";
import Project from "./components/projects/Project.jsx";
import Achievement from "./components/achievement/Achievement.jsx";
import Contact from "./components/contact/Contact.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";

const show = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/projects/:projectName",
        element: <LiveProject />,
      },
      {
        path: "/achievements",
        element: <Achievement />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

show.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
