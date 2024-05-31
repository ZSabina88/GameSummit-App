import StartQuiz from "./components/StartQuiz";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/RootLayout";
import NewQuiz from "./components/NewQuiz";

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
                path: "/quiz", element: <NewQuiz />
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
