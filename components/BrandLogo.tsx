import Image from "next/image";

type Props = {
  variant?: "theme" | "dark-surface";
};

export function BrandLogo({ variant = "theme" }: Props) {
  return (
    <span className={`brand-logo ${variant === "dark-surface" ? "brand-logo-dark-surface" : "brand-logo-theme"}`}>
      <Image
        className="brand-logo-light"
        src="/target-transport-company-logo.svg"
        alt="Target Transport Company transport and logistics logo"
        width={128}
        height={128}
        sizes="64px"
      />
      <Image
        className="brand-logo-dark"
        src="/target-transport-company-logo-dark.svg"
        alt="Target Transport Company transport and logistics logo"
        width={128}
        height={128}
        sizes="64px"
      />
    </span>
  );
}
