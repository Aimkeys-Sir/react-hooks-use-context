import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { userProvider } from "../context/user"

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <userProvider>
        <Header theme={theme} setTheme={setTheme} setUser={setUser} />
        <Profile theme={theme} />
      </userProvider>
    </main>
  );
}

export default App;
