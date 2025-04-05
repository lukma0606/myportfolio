
import './App.css'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
// import Layout from './Layout';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from './Navigation';
import Hero from './Hero';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home/> },
//       { path: "/about", element: <About /> },
//       { path: "/projects", element: <Projects /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ]);

function App() {

  // return  <RouterProvider router={router} />;
  return(
  <>
  <Navigation />
  <Hero/>
  <About />
  <Projects />
  <Contact /> 
  </>
  )
}

export default App
