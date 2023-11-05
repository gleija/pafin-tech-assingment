import { cardContainer } from "./CardContainer.css";
import { Gear, ListChecks, UserCircleGear } from "@phosphor-icons/react";
import { Card } from "../Card/Card";
import { CardDetails } from "../CardDetails/CardDetails";
import { Box } from "../Box/Box";

import {
  CARD_TITLES,
  CARD_DESCRIPTIONS,
  CARD_DETAILS_TITLES,
  CARD_DETAILS_DESCRIPTIONS,
  ACTION_LABELS,
} from "./constants"; // Import the constants file containing the card titles, descriptions, and details
import { useState } from "react";

export const CardContainer: React.FC = () => {
  const [numberOfTransactions, setNumberOfTransactions] = useState<{
    [title: string]: number;
  }>({});

  const [progress, setProgress] = useState<{
    [title: string]: number;
  }>({});

  const handleIncreaseTransactions = (
    cardTitle: string,
    cardDetailsTitle: string
  ) => {
    let updateProgress;
    setNumberOfTransactions((prevState) => {
      const updatedNumberOfTransactions = { ...prevState };
      if (updatedNumberOfTransactions[cardDetailsTitle]) {
        updatedNumberOfTransactions[cardDetailsTitle]++;
      } else {
        updatedNumberOfTransactions[cardDetailsTitle] = 1;
        updateProgress = true;
      }
      return updatedNumberOfTransactions;
    });
    if (updateProgress) {
      setProgress((prevState) => {
        const updatedProgress = { ...prevState };
        if (updatedProgress[cardTitle]) {
          updatedProgress[cardTitle]++;
        } else {
          updatedProgress[cardTitle] = 1;
        }
        return updatedProgress;
      });
    }
  };

  return (
    <Box className={cardContainer}>
      <Card
        title={CARD_TITLES.CARD_1}
        icon={<UserCircleGear size={24} color="#4299E1" weight="duotone" />}
        description={CARD_DESCRIPTIONS.CARD_1}
        progress={progress[CARD_TITLES.CARD_1]}
      >
        <CardDetails
          cardTitle={CARD_TITLES.CARD_1}
          description={CARD_DETAILS_DESCRIPTIONS.CARD_1}
          title={CARD_DETAILS_TITLES.CARD_1}
          showBadge={true}
          actionLabel={ACTION_LABELS.SELECT}
          increaseTransactions={handleIncreaseTransactions}
          numberOfTransactions={
            numberOfTransactions[CARD_DETAILS_TITLES.CARD_1]
          }
        />
        <CardDetails
          cardTitle={CARD_TITLES.CARD_1}
          description={CARD_DETAILS_DESCRIPTIONS.CARD_2}
          title={CARD_DETAILS_TITLES.CARD_2}
          selected={true}
          actionLabel={ACTION_LABELS.ADD}
          increaseTransactions={handleIncreaseTransactions}
          numberOfTransactions={
            numberOfTransactions[CARD_DETAILS_TITLES.CARD_2]
          }
        />
      </Card>
      <Card
        title={CARD_TITLES.CARD_2}
        icon={<Gear size={24} color="#4299E1" weight="duotone" />}
        description={CARD_DESCRIPTIONS.CARD_2}
        progress={progress[CARD_TITLES.CARD_2]}
      >
        <CardDetails
          cardTitle={CARD_TITLES.CARD_2}
          description={CARD_DETAILS_DESCRIPTIONS.CARD_3}
          title={CARD_DETAILS_TITLES.CARD_3}
          disabled={true}
          showMessage={true}
          actionLabel={ACTION_LABELS.IDENTIFY}
          increaseTransactions={handleIncreaseTransactions}
          numberOfTransactions={
            numberOfTransactions[CARD_DETAILS_TITLES.CARD_3]
          }
        />
        <CardDetails
          cardTitle={CARD_TITLES.CARD_2}
          description={CARD_DETAILS_DESCRIPTIONS.CARD_4}
          title={CARD_DETAILS_TITLES.CARD_4}
          disabled={true}
          actionLabel={ACTION_LABELS.RESOLVE}
          increaseTransactions={handleIncreaseTransactions}
          numberOfTransactions={
            numberOfTransactions[CARD_DETAILS_TITLES.CARD_4]
          }
        />
      </Card>
      <Card
        title={CARD_TITLES.CARD_3}
        icon={<ListChecks size={24} color="#4299E1" weight="duotone" />}
        description={CARD_DESCRIPTIONS.CARD_3}
        progress={progress[CARD_TITLES.CARD_3]}
      >
        <CardDetails
          cardTitle={CARD_TITLES.CARD_3}
          description={CARD_DETAILS_DESCRIPTIONS.CARD_5}
          title={CARD_DETAILS_TITLES.CARD_5}
          actionLabel={ACTION_LABELS.SELECT}
          increaseTransactions={handleIncreaseTransactions}
          numberOfTransactions={
            numberOfTransactions[CARD_DETAILS_TITLES.CARD_5]
          }
        />
        <CardDetails
          cardTitle={CARD_TITLES.CARD_3}
          description={CARD_DETAILS_DESCRIPTIONS.CARD_6}
          title={CARD_DETAILS_TITLES.CARD_6}
          actionLabel={ACTION_LABELS.SELECT}
          increaseTransactions={handleIncreaseTransactions}
          numberOfTransactions={
            numberOfTransactions[CARD_DETAILS_TITLES.CARD_6]
          }
        />
      </Card>
    </Box>
  );
};
