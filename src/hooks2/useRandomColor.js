import { useEffect } from "react";

const useRandomColor = (propertyName, maxSat = 40, minSat = 20) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      propertyName,
      `hsl(${Math.floor(Math.random() * 360)},${
        Math.floor(Math.random() * (maxSat - minSat)) + minSat
      }%,40%)`
    );
  });
};

export default useRandomColor;
