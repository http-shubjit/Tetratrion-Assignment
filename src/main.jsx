import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chart1 from './components/Chart1.jsx'
import Chart2 from './components/Chart2.jsx'
const routes = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {path: '/', element: <Chart1 />},
      { path: '/chart2', element: <Chart2 /> },
    ]
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <RouterProvider router={routes} />
  </>
)
