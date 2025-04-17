import { Link, LinkProps, useLocation } from "react-router-dom";

type SidebarItemProps = LinkProps;

export function SidebarItem({ ...props }: SidebarItemProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center font-medium text-muted-foreground hover:text-foreground gap-2 cursor-pointer data-[current=true]:text-foreground"
      {...props}
    />
  );
}
