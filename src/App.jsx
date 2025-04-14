import axios from 'axios'
import './App.css'
import Navbar from './Navbar/Navbar'
import ResultCharts from './ResultCharts/ResultCharts'
import ChartResult from './ChartResult/ChartResult'
import { Suspense } from 'react'

const marksPromise = axios.get('marksData.json');

// const marksPromiseData = marksPromise.data;

function App() {
  return (
    <>
     <header className=''>
      <Navbar></Navbar>
     </header>
     <div className='w-[70%] mx-auto my-[40px]'>
      <ResultCharts></ResultCharts>
     </div>
     <div className='w-[70%] mx-auto my-[40px]'>
      <Suspense fallback={<h3>Data is loading.....</h3>}>
        <ChartResult marksPromise={marksPromise}></ChartResult>
      </Suspense>
     </div>
    </>
  )
}

export default App
