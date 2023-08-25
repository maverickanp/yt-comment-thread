import { X } from "phosphor-react";

import styles from "./Modal.module.css";

export function Modal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.titleModal}>
          <h3>Excluir comentário</h3>
        </div>
        <div className={styles.subTitle}>
          <div>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>
          </div>
        </div>
        <div className={styles.modalBtn}>
          <button onClick={onClose}>Cancelar</button>
          <button
          onClick={onConfirm}
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}
