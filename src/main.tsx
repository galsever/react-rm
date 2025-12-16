import { StrictMode } from 'react'
import './index.css'
import AuthProvider from "./components/AuthProvider.tsx";
import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout.tsx";
import TodoApp from "./routes/TodoApp.tsx";
import SearchApp from "./routes/SearchApp.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/app",
        element: <Layout />,
        children: [
            {
                path: "todos",
                element: <TodoApp />
            },
            {
                path: "search",
                element: <SearchApp />
            }
        ]
    }
])

export const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
          </QueryClientProvider>
      </AuthProvider>
  </StrictMode>,
)
