interface LinkHandlerProps {
  isActive: boolean;
  activeCSS: string;
  defaultCSS: string;
}

export const linkHandler = ({ isActive, activeCSS, defaultCSS }: LinkHandlerProps) =>
  isActive ? `${activeCSS} ${defaultCSS}` : defaultCSS;
