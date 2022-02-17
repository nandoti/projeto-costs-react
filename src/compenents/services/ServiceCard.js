import { BsFillTrashFill } from "react-icons/bs";

import styles from "../project/ProjectCard.module.css";

function ServiceCard({ id, name, cost, description, handleRemove }) {

  const remove = (ev) => {

  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <spam>Custo total:</spam>R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
