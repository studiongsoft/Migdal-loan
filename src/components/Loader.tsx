"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LoaderProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Loader({ className = "", width = 68, height = 310 }: LoaderProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/images/Loader.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      className={className}
      style={{ width, height }}
    />
  );
}
