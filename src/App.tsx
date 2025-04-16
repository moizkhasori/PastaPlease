import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Components
import QuestionPage from "./pages/question/QuestionPage";
import Answer from "./pages/answer/Answer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<QuestionPage />} />
      <Route path="/yes" element={<Answer />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
