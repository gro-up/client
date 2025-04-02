import { UserNavigation } from './user-navigation';

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 w-[350px]">
      <UserNavigation />
    </div>
  );
};
