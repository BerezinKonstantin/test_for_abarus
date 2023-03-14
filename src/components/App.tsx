import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Routes>
      <Route path="/:page" element={<Main />} />
      <Route path="*" element={<Navigate to={`1`} replace />} />
    </Routes>
  );
}

export default App;
