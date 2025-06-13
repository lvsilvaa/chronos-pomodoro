import styles from "./styles.module.css";
import "../../style/global.css";
import "../../style/theme.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

export function Menu() {
  return (
    <div className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <button>
          <HouseIcon />
        </button>
        <button>
          <HistoryIcon />
        </button>
        <button>
          <SettingsIcon />
        </button>
        <button>
          <SunIcon />
        </button>
      </a>
    </div>
  );
}
