
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import GlobalStyle from "./styles/GlobalStyle";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/today" element={<Private> <Today /> </Private>} />
        <Route path="/habits" element={<Private> <Habits /> </Private>} />
        <Route path="/historic" element={<Private> <Historic /> </Private>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;