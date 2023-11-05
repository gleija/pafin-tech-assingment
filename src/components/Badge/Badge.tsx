import React from "react";
import { badge } from "./Badge.css"; 

type BadgeProps = {
  numberOfTransactions: number;
};

const Badge: React.FC<BadgeProps> = ({ numberOfTransactions }) => {
  return (
    <div className={badge}>
      {numberOfTransactions} 取引所/ブロックチェーン選択済み
    </div>
  );
};

export default Badge;
