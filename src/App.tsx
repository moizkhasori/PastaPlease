import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Components
import Question from "./pages/question/Question";
import Answer from "./pages/answer/Answer";
import ForceRender from "./ForceRender";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<ForceRender />} />
      <Route path="/yes" element={<Answer />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
