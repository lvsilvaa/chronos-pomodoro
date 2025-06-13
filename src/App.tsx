import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";
import { Container } from "./Components/Container";
import { Heading } from "./Components/Heading";
import { Logo } from "./Components/Logo";

import "./style/global.css";
import "./style/theme.css";
import { Menu } from "./Components/Menu";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  );
}
