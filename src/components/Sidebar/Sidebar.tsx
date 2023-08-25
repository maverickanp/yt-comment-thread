import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/maverickanp.png" />
        <strong>Artur Pedrosa</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
