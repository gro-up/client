export interface Company {
  id: string;
  company: string;
  job: string;
  email: string;
  company_link: string;
}

export const companyList: Company[] = [
  {
    id: '728ed52f',
    company: '회사1',
    job: '직무1',
    email: 'm@example.com',
    company_link: 'https://www.google.com',
  },
  {
    id: '489e1d42',
    company: '회사2',
    job: '직무2',
    email: 'example@gmail.com',
    company_link: 'https://www.google.com',
  },
];
