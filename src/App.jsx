import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { useContext } from "react";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CashIncome from "./pages/cashIncome";

import GlobalStyle from "./styles/GlobalStyle";

import { AuthProvider, AuthContext } from './contexts/auth';


const App = () => {
  const Private = ( {children} ) => {
  const { authenticated } = useContext(AuthContext);

  if(!authenticated){
    return <Navigate to="/" />
  }

  return children;
  }


  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="cash-income" element={<Private> <CashIncome /> </Private>} />
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;