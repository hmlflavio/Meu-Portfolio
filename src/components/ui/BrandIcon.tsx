// src/components/ui/BrandIcon.tsx

import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import spotify from "../../assets/icons/spotify.svg";
import lastfm from "../../assets/icons/lastfm.svg";
import letterboxd from "../../assets/icons/letterboxd.svg";
import pinterest from "../../assets/icons/pinterest.svg";

const icons = {
  github,
  linkedin,
  instagram,
  spotify,
  lastfm,
  letterboxd,
  pinterest,
};

export type BrandIconName = keyof typeof icons;

interface BrandIconProps {
  name: BrandIconName;
  size?: number;
  className?: string;
}

export function BrandIcon({
  name,
  size = 22,
  className = "",
}: BrandIconProps) {
  return (
    <img
      src={icons[name]}
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
}