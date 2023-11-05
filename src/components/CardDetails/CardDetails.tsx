import React, { useState, useEffect, useMemo, useCallback } from "react";

import * as styles from "./CardDetails.css";
import { CheckCircle, CircleDashed, Info } from "@phosphor-icons/react";
import { Text } from "../TextUI/Text.tsx";
import Button from "../Button/Button";
import Badge from "../Badge/Badge";

type CardDetailsProps = {
  cardTitle: string;
  title: string;
  description: string;
  showBadge?: boolean;
  actionLabel: string;
  selected?: boolean;
  disabled?: boolean;
  showMessage?: boolean;
  increaseTransactions: (cardTitle:string, cardDetailsTitle: string) => void;
  numberOfTransactions: number;
};

const calculateOpacity = (disabled: boolean): number => (disabled ? 0.6 : 1);

export const CardDetails: React.FC<CardDetailsProps> = ({
  cardTitle,
  title,
  description,
  showBadge = false,
  actionLabel = "選択する",
  selected = false,
  disabled = false,
  showMessage = false,
  increaseTransactions = () => {},
  numberOfTransactions,
}) => {
  const [internalNumberOfTransactions, setInternalNumberOfTransactions] =
    useState<number>(0);

  useEffect(() => {
    // Set a default value for internalNumberOfTransactions if numberOfTransactions is undefined
    const num = numberOfTransactions || 0;
    setInternalNumberOfTransactions(num);
  }, [numberOfTransactions]); // Update state when prop changes

  const iconComponent =
    internalNumberOfTransactions === 0 ? (
      <CircleDashed size={19.5} color="#A7AEB4" weight="thin" />
    ) : (
      <CheckCircle size={19.5} color="#38C97C" weight="fill" />
    );

  //I have used useMemo to memoize the opacity calculation, which will prevent it from being recalculated unnecessarily.
  // This is because the opacity depends only on the disabled prop, which is unlikely to change frequently.
  const opacity = useMemo(() => calculateOpacity(disabled), [disabled]);

  //I have also used useCallback to memoize the handleIncreaseTransactions function,
  //which will prevent it from being recreated unnecessarily.
  // This is because the handleIncreaseTransactions function does not depend on any props or state, so it will always be the same function.
  const handleIncreaseTransactions = useCallback(() => {
    increaseTransactions(cardTitle, title);
  }, []);

  return (
    <div className={selected ? styles.selected : styles.det}>
      <div className={styles.detHeader}>
        <div className={styles.title}>
          <div className={styles.titleContainer}>
            <div className={styles.titleText}>
              <div className={styles.content} style={{ opacity }}>
                {iconComponent}
              </div>
              <div className={styles.text}>
                <div style={{ opacity }}>
                  <Text card>{title}</Text>
                </div>
                {showBadge && numberOfTransactions !== 0 && (
                  <div style={{ display: "flex", opacity }}>
                    <div>
                      <Badge numberOfTransactions={numberOfTransactions} />
                    </div>
                  </div>
                )}
                <div style={{ opacity }}>
                  <Text cardContent>{description}</Text>
                </div>
                {showMessage && (
                  <div className={styles.top}>
                    <Info size={16} color="#276EF1" weight="regular" />
                    <Text cardContent>
                      お客様はDeFi
                      取引が無い為、完了したものとして認識しました。
                    </Text>
                  </div>
                )}
              </div>
            </div>
            <div
              className={styles.button}
              style={{
                opacity,
                pointerEvents: disabled ? "none" : "auto",
              }}
            >
              <Button
                actionLabel={actionLabel}
                onClick={handleIncreaseTransactions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
