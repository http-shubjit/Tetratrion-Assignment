import ReactECharts from 'echarts-for-react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from "./components/Header"
import Fotter from './components/Fotter';
import Sidebar from './components/Sidebar';
import {store} from '../store/store';

import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';


function App() {

//   useEffect(() => {
  
// // const fetchData = async () => {
// //   try {
// //     const response = await fetch("https://tetratrionofficial.github.io/hosted_api/assignment_dashboard.json");
// //     if (!response.ok) {
// //       throw new Error('Failed to fetch data');
// //     }
// //     const textData = await response.text(); 
// //     const jsonData = JSON.parse(textData); //Unexpected non-whitespace character after JSON at position 234815 because in the response data a "," not present which give a syntax error
// //     setData(jsonData); 
// //   } catch (error) {
// //     console.error('Error fetching data:', error);
// //   }
// // };
// })

  
  return (
    <Provider store={store} >
      <div className='app-container'>
        <Sidebar/>
        <div className='content'>
          <Header />
          <Outlet/>
          <Fotter />
        </div>
      </div>
    </Provider>
  )
}

export default App
