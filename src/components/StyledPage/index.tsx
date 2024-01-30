import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const StyledPage = ({ children }: Props) => {
  return (
    <div className="h-full m-4 w-full bg-[#fff]">
      <div className="flex flex-col gap-4 w-full">{children}</div>
    </div>
  );
};

export default StyledPage;
