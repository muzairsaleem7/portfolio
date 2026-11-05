import type { SVGProps } from "react";
import { cn } from "@/lib/cn";
import { assetPath } from "~/site.config";
import { ICON_SPRITE_URL } from "@/components/ui/icon-sprite.generated";

const SPRITE = assetPath(ICON_SPRITE_URL);

/**
 * Lucide icons for server components, served from a sprite built from lucide-react
 * (scripts/build-icon-sprite.mjs). Same names and props as lucide-react, but each icon is
 * <svg><use/></svg>: two DOM nodes, nothing in the RSC payload but the name, nothing to hydrate
 * beyond the wrapper. Client components keep importing lucide-react directly.
 *
 * To add an icon: add a spriteIcon("PascalName") export below; the sprite rebuilds on dev/build.
 */
export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  size?: number | string;
  strokeWidth?: number | string;
};
export type IconComponent = (props: IconProps) => React.JSX.Element;

function spriteIcon(name: string): IconComponent {
  function SpriteIcon({ size, strokeWidth, className, style, ...rest }: IconProps) {
    // Fill, stroke, caps, and the 24px default size come from the .icon rule in globals.css,
    // so each icon carries only what varies. Overrides go inline because CSS outranks SVG
    // presentation attributes.
    const overrides =
      size !== undefined || strokeWidth !== undefined
        ? { width: size, height: size, strokeWidth, ...style }
        : style;
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("icon", className)}
        style={overrides}
        {...rest}
      >
        <use href={`${SPRITE}#${name}`} />
      </svg>
    );
  }
  SpriteIcon.displayName = name;
  return SpriteIcon;
}

export const Activity = spriteIcon("Activity");
export const AppWindow = spriteIcon("AppWindow");
export const ArrowDown = spriteIcon("ArrowDown");
export const ArrowLeft = spriteIcon("ArrowLeft");
export const ArrowRight = spriteIcon("ArrowRight");
export const ArrowUp = spriteIcon("ArrowUp");
export const ArrowUpRight = spriteIcon("ArrowUpRight");
export const Boxes = spriteIcon("Boxes");
export const BriefcaseBusiness = spriteIcon("BriefcaseBusiness");
export const Building2 = spriteIcon("Building2");
export const CalendarCheck = spriteIcon("CalendarCheck");
export const Check = spriteIcon("Check");
export const CircleCheck = spriteIcon("CircleCheck");
export const Cloud = spriteIcon("Cloud");
export const Code2 = spriteIcon("Code2");
export const Compass = spriteIcon("Compass");
export const Database = spriteIcon("Database");
export const ExternalLink = spriteIcon("ExternalLink");
export const FileText = spriteIcon("FileText");
export const FolderKanban = spriteIcon("FolderKanban");
export const GitBranch = spriteIcon("GitBranch");
export const Globe = spriteIcon("Globe");
export const GraduationCap = spriteIcon("GraduationCap");
export const Handshake = spriteIcon("Handshake");
export const House = spriteIcon("House");
export const Info = spriteIcon("Info");
export const Layers = spriteIcon("Layers");
export const LayoutDashboard = spriteIcon("LayoutDashboard");
export const Lightbulb = spriteIcon("Lightbulb");
export const Mail = spriteIcon("Mail");
export const MapPin = spriteIcon("MapPin");
export const MessageSquareText = spriteIcon("MessageSquareText");
export const MonitorSmartphone = spriteIcon("MonitorSmartphone");
export const Phone = spriteIcon("Phone");
export const Puzzle = spriteIcon("Puzzle");
export const Rocket = spriteIcon("Rocket");
export const School = spriteIcon("School");
export const Send = spriteIcon("Send");
export const Server = spriteIcon("Server");
export const Target = spriteIcon("Target");
export const UserRound = spriteIcon("UserRound");
export const UsersRound = spriteIcon("UsersRound");
export const Workflow = spriteIcon("Workflow");
export const Wrench = spriteIcon("Wrench");
