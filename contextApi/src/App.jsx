import AuthContextProvider from "./context/AuthContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";
function App() {

  return (
    <>
      <AuthContextProvider>
      <h1>Welcome</h1>
      <Login />
      <Profile/>
      </AuthContextProvider>
    </>
  )
}

export default App
