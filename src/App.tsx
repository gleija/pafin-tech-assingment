import { main, top } from "./App.css";

import { AsidedLayout } from "./components/AsidedLayout/AsidedLayout";
import { Box } from "./components/Box/Box";

import { CardContainer } from "./components/CardContainer/CardContainer";
import { AsideContent } from "./layouts/AsideContent/AsideContent";
import { Heading } from "./components/Heading/Heading";

function App() {
  // This function renders the main layout of the app.
  return (
    <Box className={main}>
      <Box className={top}>
        <Heading level="h2">クリプタクトで計算を始めてみましょう</Heading>
      </Box>
      <AsidedLayout aside={<AsideContent />}>
        <CardContainer />
      </AsidedLayout>
    </Box>
  );
}

export default App;
