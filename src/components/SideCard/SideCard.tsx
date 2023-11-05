import * as styles from "./SideCard.css";

import { Box } from "../Box/Box";
import { Text } from "../TextUI/Text";

type SideCardProps = {
  title: string;
  content: string;
};

export const SideCard: React.FC<SideCardProps> = ({ title, content }) => {
  return (
    <Box className={styles.sideCard}>
      <Text smallTitle>{title}</Text>
      <Text smallText>{content}</Text>
    </Box>
  );
};
