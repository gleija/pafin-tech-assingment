import * as styles from "./AsideContent.css";

import { Box } from "../../components/Box/Box";
import { Text } from "../../components/TextUI/Text";
import { SideCard as Card } from "../../components/SideCard/SideCard";

import { SIDE_CARD_TITLES, SIDE_CARD_CONTENTS } from "./constants";

export const AsideContent: React.FC = () => (
  <Box className={styles.sideCard}>
    <Box className={styles.spacing}>
      <Text smallTitle>クイックアクセス</Text>
    </Box>
    <Box className={styles.spacing}>
      <Card
        title={SIDE_CARD_TITLES.OPENING_BALANCE}
        content={SIDE_CARD_CONTENTS.OPENING_BALANCE}
      />
    </Box>
    <Box className={styles.spacing}>
      <Card
        title={SIDE_CARD_TITLES.BOOK_SETTINGS}
        content={SIDE_CARD_CONTENTS.BOOK_SETTINGS}
      />
    </Box>
  </Box>
);
