import React from "react";
import "./index.css";

type AsidedLayoutProps = {
  children: React.ReactNode;
  aside: React.ReactNode;
};

/**
 * AsidedLayout component renders a layout with a main content section and an aside section.
 * @param {React.ReactNode} children The content to be displayed in the main section.
 * @param {React.ReactNode} aside The content to be displayed in the aside section.
 * @returns {React.ReactNode} The rendered AsidedLayout component.
 */
export const AsidedLayout: React.FC<AsidedLayoutProps> = ({ children, aside }: AsidedLayoutProps) => (
  <div className="asided-layout">
    <div className="main-section" role="main">
      <div className="content">{children}</div>
    </div>
    <div className="aside-section" role="complementary">{aside}</div>
  </div>
);

