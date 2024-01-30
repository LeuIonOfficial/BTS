import { Divider } from 'antd';
import { ReactNode } from 'react';
import CustomHeader from './components/Header';

const LoggedIn = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <CustomHeader />
      <Divider className="m-0" />
      <div className="flex justify-center p-[1rem] min-h-[calc(100vh-57px)] bg-greyBackground">
        {children}
      </div>
    </div>
  );
};

export default LoggedIn;
