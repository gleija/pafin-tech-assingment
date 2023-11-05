import * as styles from "./Card.css";

import { Text } from "../TextUI/Text.tsx";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

import { useEffect, useState } from "react";

type CardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  progress?: number;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  description,
  progress = 0,
  children,
}) => {
  const [isContentVisible, setContentVisibility] = useState<boolean>(true);
  const [internalProgress, setInternalProgress] = useState<number>(0);

  useEffect(() => {
    // Set a default value for internalProgress based on progressBar value
    const progressBar = progress || 0;
    let internalProgress = 0;
    if (progressBar === 1) {
      internalProgress = 50;
    } else if (progressBar > 1) {
      internalProgress = 100;
    }
    setInternalProgress(internalProgress);
  }, [progress]); // Update state when progress changes

  const toggleContent = () => {
    setContentVisibility(!isContentVisible);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.title}>
          <div className={styles.titleContainer}>
            <div className={styles.titleText}>
              <div className={styles.content}>{icon}</div>
              <Text cardTitle>{title}</Text>
            </div>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressItems}>
              <div className={styles.progressBarBar}>
                <div className={styles.progressBarPercentage} style={{ width: `${internalProgress}%`}} />
              </div>
              <div>
                <Text gray>1/2ステップ</Text>
              </div>
            </div>
            <div onClick={toggleContent}>
              {isContentVisible ? (
                <CaretDown size={16} color="#8C959D" />
              ) : (
                <CaretUp size={16} color="#8C959D" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", paddingTop: "16px" }}>
        <Text secondary>{description}</Text>
      </div>
      {isContentVisible && (
        <div className={styles.contentVisible}>{children}</div>
      )}
    </div>
  );
};
