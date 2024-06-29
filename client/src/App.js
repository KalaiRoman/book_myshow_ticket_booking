import { useEffect, useState } from 'react';
import './App.css';
import { RoutingPathAll } from './middleware/routingpaths/RoutingPaths';
import {
  Route,
  Routes
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserLoadingFunction } from './redux/Reducer/Browser_loading_Reducer';
function App() {
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(false);
  const state=useSelector((state)=>state?.InitialLoading);
  useEffect(() => {
    setLoading(true);
    dispatch(BrowserLoadingFunction(true));
    const timer = setTimeout(() =>{ setLoading(false)
      dispatch(BrowserLoadingFunction(loading));
    }, 500); 
    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
      {state?.BrowserLoading ?<div className="loader">Loading...</div>:<>
        <Routes>
        {RoutingPathAll?.map((item, index) => {
          const { path, exactpath, element } = item;
          return (
            <Route exact={exactpath} element={element} path={path} key={index} />
          );
        })}
      </Routes>
      </>}
      
    </>
  );
}

export default App;
