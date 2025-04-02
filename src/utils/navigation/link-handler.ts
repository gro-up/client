interface LinkHandlerProps {
  isActive: boolean;
}

export const linkHandler = (
  { isActive }: LinkHandlerProps,
  activeCSS: string = '',
  defaultCSS: string = ''
) => (isActive ? `${activeCSS} ${defaultCSS}` : defaultCSS);
