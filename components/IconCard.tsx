import {
  Accessibility,
  ArrowUpRight,
  BadgeCheck,
  BadgePercent,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CarFront,
  CheckCircle,
  CircleCheck,
  Clipboard,
  ClipboardList,
  ContactRound,
  Eye,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  HeartPulse,
  HeartHandshake,
  Hotel,
  ListChecks,
  ListPlus,
  Mail,
  MapPin,
  MapPinned,
  MessagesSquare,
  NotebookText,
  Phone,
  Plane,
  Route,
  Scan,
  Target,
  Users,
  UsersRound,
  Van,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const icons: Record<string, LucideIcon> = {
  accessibility: Accessibility,
  "badge-check": BadgeCheck,
  "badge-percent": BadgePercent,
  briefcase: Briefcase,
  "briefcase-business": BriefcaseBusiness,
  "building-2": Building2,
  "calendar-days": CalendarDays,
  "car-front": CarFront,
  "check-circle": CheckCircle,
  "circle-check": CircleCheck,
  clipboard: Clipboard,
  "clipboard-list": ClipboardList,
  "contact-round": ContactRound,
  eye: Eye,
  factory: Factory,
  fuel: Fuel,
  "graduation-cap": GraduationCap,
  "hard-hat": HardHat,
  "heart-pulse": HeartPulse,
  "heart-handshake": HeartHandshake,
  hotel: Hotel,
  "list-checks": ListChecks,
  "list-plus": ListPlus,
  mail: Mail,
  "map-pin": MapPin,
  "map-pinned": MapPinned,
  "messages-square": MessagesSquare,
  "notebook-text": NotebookText,
  phone: Phone,
  plane: Plane,
  route: Route,
  scan: Scan,
  target: Target,
  users: Users,
  "users-round": UsersRound,
  van: Van,
};

export function IconCard({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: string;
  link?: { href: string; label: string };
}) {
  const Icon = icons[icon] ?? ArrowUpRight;
  return (
    <article className="info-card">
      <span className="card-icon" aria-hidden="true"><Icon size={21} /></span>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <Link className="text-link" href={link.href}>{link.label}<ArrowUpRight size={15} aria-hidden="true" /></Link>}
    </article>
  );
}
