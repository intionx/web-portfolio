"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div>
        <Switch
          size="lg"
          color="success"
          isSelected={theme === "dark"}
          onValueChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label="Toggle dark mode"
          thumbIcon={
            theme === "light" ? (
              <Image src={assets.moon_icon} alt="moon" width={20} height={20} />
            ) : (
              <Image src={assets.sun_icon} alt="sun" width={20} height={20} />
            )
          }
        />
      </div>
    </>
  );
}
