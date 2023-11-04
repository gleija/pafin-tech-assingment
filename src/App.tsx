import * as styles from "./App.css";

import Box from "./components/Box/Box";
import Text from "./components/Text/Text";

function App() {
  return (
    <Box className={styles.body}>
      <Box className={styles.main}>
        <Box className={styles.text}>
          <Text title>
            クリプタクトで計算を始めてみましょう
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
