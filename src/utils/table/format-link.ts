export const formatLink = (company_link: string) =>
  company_link.replace('https://', '').replace('http://', '').replace('www.', '');
