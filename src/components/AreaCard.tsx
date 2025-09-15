import React from "react";

type AreaCardProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

const AreaCard: React.FC<AreaCardProps> = ({ icon, title, children }) => {
  return (
    <div className="area-card">
      <span className="area-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default AreaCard;
