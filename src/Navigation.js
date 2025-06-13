import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import OurActions from './pages/OurActions/OurActions'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/ourActions',
            element: <OurActions />,
        },
      
    ])
    return <RouterProvider router={router} />
}