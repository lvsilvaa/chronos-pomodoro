import { MessagesContainer } from "./Components/MessagesContainer";
import { TaskContexProvider } from "./Contexts/TaskContex/TaskContextProvider";
import "./style/global.css";
import "./style/theme.css";
import { MainRouters } from "./Routers/MainRouters";

export function App() {
  return (
    <TaskContexProvider>
      <MessagesContainer>
        <MainRouters />
      </MessagesContainer>
    </TaskContexProvider>
  );
}
