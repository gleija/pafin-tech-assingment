import * as styles from "./CardTitle.css";
import { Text } from "../../components/TextUI/Text"

type CardTitleProps = {
  icon: React.ReactNode;
  title: string;
  small?: boolean;
};

export const CardTitle: React.FC<CardTitleProps> = ({ icon, title, small }) => {
  const containerStyle = small ? styles.titleContainerSmall : styles.titleContainer;
  const textStyle = small ? styles.titleTextSmall : styles.titleText;

  return (
    <div className={containerStyle}>
      <div className={textStyle}>
        <div className={styles.content}>{icon}</div>
        <Text cardTitle>{title}</Text>
      </div>
    </div>
  );
};
