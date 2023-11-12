import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Result from "./Result";




const RouteComponenet = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />}/>
      <Route path="/search" element={<Result />}/>
      <Route path="/images" element={<Result />}/>
      <Route path="/videos" element={<Result />}/>
      <Route path="/news" element={<Result />}/>
      <Route />
    </Routes>
  )
};

export default RouteComponenet;
