import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestHome } from "./redux/Home/homeAction";
import Home from "./screens/home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestHome());
  }, [dispatch]);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
