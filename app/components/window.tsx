import Link from "next/link";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={cx("window", className)}>
      <div className="window-bar">
        <span className="window-box" aria-hidden="true" />
        <span className="window-title">{title}</span>
      </div>
      <div className={cx("window-body", bodyClassName)}>{children}</div>
    </div>
  );
}

export function RetroButton({
  href,
  children,
  accent = false,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  const className = cx("retro-button", accent && "retro-button-accent");

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
