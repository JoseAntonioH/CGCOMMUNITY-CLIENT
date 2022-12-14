import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Feautures from "./pages/feautures";
import Profile from "./pages/profile";
import Games from "./pages/games";
import GameDetails from "./pages/gameDetails";
import EditGames from "./pages/editGames";
import DetailsTournament from "./pages/detailsTournaments";




export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/feautures" element={<Feautures/>}/>
        <Route path="/profile" element={<Profile user={user}/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/games/:id" element={<GameDetails user={user}/>}/>
        <Route path="/games/edit/:id" element={<EditGames/>}/>
        <Route path="/games/tournaments/:id" element={<DetailsTournament/>}/>
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>}/>
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>}/>
        
        
      </Routes>
    </div>
  );
}


 //{routes({ user, authenticate, handleLogout }).map((route) => (
          //<Route key={route.path} path={route.path} element={route.element} />
       //))}