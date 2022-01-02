import Weather from "../Screen/Weather";
import { Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
function CustomRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Weather/:name" element={<Weather />} />
    </Routes>
  );
}
export default CustomRouter;
