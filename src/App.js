import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Securedpage from "./pages/Securedpage";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box w="100%" p={4}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="secured" element={<Securedpage />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
