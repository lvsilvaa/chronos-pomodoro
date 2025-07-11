import { TaskContexProvider } from "./Contexts/TaskContex/TaskContextProvider";
import { Home } from "./pages/Home";

import "./style/global.css";
import "./style/theme.css";

export function App() {
  return (
    <TaskContexProvider>
      <Home />;
    </TaskContexProvider>
  );
}
