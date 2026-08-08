import React from "react";

export const Icon = React.forwardRef(function Icon({ icon, ...props }, ref) {
  const [sprite, iconName] = icon.split("/");
  return (
    <svg ref={ref} {...props}>
      <use href={`/sprites/${sprite}.svg?v=1U8Cze9LJuiisEaAd4uNLJ#${iconName}`} />
    </svg>
  );
});
