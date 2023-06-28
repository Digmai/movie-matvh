import { Router } from "../Router";
import Header from "./Header";

function App() {
  return <Router Layout={Layout} />;
}

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-bl from-cyan-500 to-blue-500">
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default App;
