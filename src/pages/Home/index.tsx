import { MainTemplate } from "../../templates/MainTemplates";
import { Container } from "../../Components/Container";
import { CountDown } from "../../Components/CountDown";
import { MainForm } from "../../Components/MainForm";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
