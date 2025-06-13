import {
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
  TimerResetIcon,
} from "lucide-react";
import { Container } from "./Components/Container";
import { Heading } from "./Components/Heading";
import "./style/global.css";
import "./style/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <TimerIcon size={50} />
        </Heading>
      </Container>
      <Container>
        <Heading>Chronos</Heading>
      </Container>
      <Container>
        <Heading>
          <button>
            <HouseIcon />
          </button>
          <button>
            <TimerResetIcon />
          </button>
          <button>
            <SettingsIcon />
          </button>
          <button>
            <SunIcon />
          </button>
        </Heading>
      </Container>
    </>
  );
}
