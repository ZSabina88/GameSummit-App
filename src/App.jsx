import Header from "./components/Header";
import Quiz from "./components/Quiz";
import StartQuiz from "./components/StartQuiz";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, element: <StartQuiz />
            },
            {
                path: "/quiz", element: <Quiz />
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
