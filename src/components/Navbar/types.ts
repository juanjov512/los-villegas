interface ILink {
  label: string;
  href: string;
}

interface INavbarProps {
  links: ILink[]
}

export type { INavbarProps };
