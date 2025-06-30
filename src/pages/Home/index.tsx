import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../Components/Container";
import { CountDown } from "../../Components/CountDown";
import { MainForm } from "../../Components/MainForm";
/*import type { TaskStateModel } from "../../models/taskStateModel";*/

/*export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};*/

export function Home(/*props: HomeProps*/) {
  return (
    <MainTemplate>
      <Container>
        <CountDown /*{...props}*/ />
      </Container>
      <Container>
        <MainForm /*{...props}*/ />
      </Container>
    </MainTemplate>
  );
}
