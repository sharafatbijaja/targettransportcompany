import Image from "next/image";

type Props = {
  variant?: "theme" | "dark-surface";
};

export function BrandLogo({ variant = "theme" }: Props) {
  return (
    <span className={`brand-logo ${variant === "dark-surface" ? "brand-logo-dark-surface" : "brand-logo-theme"}`}>
      <Image
        className="brand-logo-light"
        src="/images/target-transport-company-logo.svg"
        alt=""
        aria-hidden="true"
        width={128}
        height={128}
        sizes="64px"
      />
      <Image
        className="brand-logo-dark"
        src="/images/target-transport-company-logo-dark.svg"
        alt=""
        aria-hidden="true"
        width={128}
        height={128}
        sizes="64px"
      />
    </span>
  );
}
