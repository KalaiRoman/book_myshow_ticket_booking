import { useEffect, useState } from 'react';
import './App.scss';
import { RoutingPathAll } from './middleware/routingpaths/RoutingPaths';
import {
  Route,
  Routes
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserLoadingFunction } from './redux/Reducer/Browser_loading_Reducer';
import { Loader } from './middleware/loader/Loader';
import ProtectedRouter from './middleware/routingpaths/ProtectedRouter';
function App() {
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(false);
  const state=useSelector((state)=>state?.InitialLoading);
  useEffect(() => {
    setLoading(true);
    dispatch(BrowserLoadingFunction(!true));
    const timer = setTimeout(() =>{ setLoading(false)
      dispatch(BrowserLoadingFunction(loading));
    }, 500); 
    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
      {state?.BrowserLoading ?<div>
        <Loader/>
      </div>:<>
        <Routes>
        {RoutingPathAll?.map((item, index) => {
          const { path, exactpath, element } = item;
          return(
            <>
             {/* <Route element={<ProtectedRouter/>}> */}
            <Route exact={exactpath} element={element} path={path} key={index} />
            {/* </Route> */}
            </>
          )
        })}
      </Routes>
      </>}
      
    </>
  );
}

export default App;
