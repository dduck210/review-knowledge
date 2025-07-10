import Counter from "./components/Counter";
import Profile from "./components/Profile";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Counter />
      <Profile />
    </UserProvider>
  );
}
export default App;
