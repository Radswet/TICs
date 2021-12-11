import "./style/App.css";
import "tailwindcss/tailwind.css"
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import StackedBar from "./components/Graphic";
import StackedBarHis from "./components/GraphicHis";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    <div class="grid grid-cols-6 gap-4 my-8 ml-3" className="App">
      <div class="col-start-1 col-end-1 box-card">
        <Profile />
      </div>
      <div class="col-start-2 col-end-6 box-card">
        <StackedBar />
      </div>
      <div class="col-start-6">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
      <div class="col-start-2 col-end-6 box-card">
        <StackedBarHis />
      </div>
    </div>
  );
}

export default App;
 