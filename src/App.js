import "./App.css";
import { AppProvider } from "./store/context/AppContext.tsx";
import BoardPage from "./pages/BoardPage.tsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          newestOnTop
          closeOnClick
          pauseOnHover={false}
          draggable
          theme="dark"
          limit={1}
          pauseOnFocusLoss={false}
        />
        <BoardPage />
      </AppProvider>
    </div>
  );
}

export default App;
