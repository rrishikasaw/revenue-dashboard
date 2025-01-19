import { useState, useEffect } from 'react';
import LineChart from './components/charts/LineChart';
import NavBar from './components/NavBar';
import List from './components/List';
import { useSelector } from 'react-redux';
import { RootState } from './stores/store';
import PieChart from './components/charts/PieChart';
import AreaGraph from './components/charts/AreaGraph';
import PointingLineChart from './components/charts/PointingLineChart';
import FloatingBarChart from './components/charts/FloatingBarChart';
import BubbleChart from './components/charts/BubbleChart';
import DonutChart from './components/charts/DonutChart';
import ScatterPlot from './components/charts/ScatterPlot';
import PolarAreaChart from './components/charts/PolarAreaChart';
import RadarChart from './components/charts/RadarChart';
import RadarAreaChart from './components/charts/RadarAreaChart';
import SkeletonGraph from './components/SkeletonGraph';
import ErrorPage from './components/ErrorPage';
import React from 'react';
import BarChart from './components/charts/BarChart';

function App() {
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataRange, setDataRange] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 2000);
    setIsError(Math.random() > 0.7);
    const dataRange = localStorage.getItem('dataRange');
    if (dataRange) {
      setDataRange(+dataRange);
    }
    return () => clearTimeout(timer);
  }, []);

  const updateDataRange = (value: number) => {
    setDataRange(value);
    if (value) {
      localStorage.setItem('dataRange', `${value}`);
    } else {
      localStorage.removeItem('dataRange');
    }
    location.reload();
  };

  return (
    <>
      <div className={isDarkMode ? 'dark' : ''}>
        <NavBar />
        <article className="flex justify-evenly dark:bg-gray-900">
          <section>
            <h1 className="text-3xl font-bold py-2 my-2 ms-1 text-gray-800 dark:text-white">Main Dashboard</h1>

            <List />

            <div className="flex justify-end">
              <div className="relative z-20 w-44">
                <select
                  onChange={(e) => updateDataRange(+e.target.value)}
                  className="relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                >
                  <option value={0} selected={dataRange === 0} className="bg-white dark:bg-dark-2 dark:text-black">
                    Data Range
                  </option>
                  <option value={7} selected={dataRange === 7} className="bg-white dark:bg-dark-2 dark:text-black">
                    Last Week
                  </option>
                  <option value={30} selected={dataRange === 30} className="bg-white dark:bg-dark-2 dark:text-black">
                    Last Month
                  </option>
                  <option value={180} selected={dataRange === 180} className="bg-white dark:bg-dark-2 dark:text-black">
                    Last 6 Months
                  </option>
                </select>

                <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
              </div>
            </div>

            <div className="chart-container">
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <LineChart />}
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <BarChart />}
            </div>

            <div className="chart-container">
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <PieChart />}
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <AreaGraph />}
            </div>

            <div className="chart-container">
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <FloatingBarChart />}
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <PointingLineChart />}
            </div>

            <div className="chart-container">
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <BubbleChart />}
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <DonutChart />}
            </div>

            <div className="chart-container">
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <ScatterPlot />}
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <PolarAreaChart />}
            </div>

            <div className="chart-container">
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <RadarChart />}
              {showSkeleton ? <SkeletonGraph /> : isError ? <ErrorPage /> : <RadarAreaChart />}
            </div>

            <div className="w-[90vw]"></div>
          </section>
        </article>
      </div>
    </>
  );
}

export default React.memo(App);
