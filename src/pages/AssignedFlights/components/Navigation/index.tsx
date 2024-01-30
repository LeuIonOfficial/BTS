import routes from '@routes/routes.ts';
import { generatePath, NavLink, useParams } from 'react-router-dom';

import { useTabs, classNames } from './constants.tsx';

export default function Navigation() {
  const { id } = useParams();
  const tabs = useTabs();

  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
        <div>
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {tabs.map((tab) => (
                <option key={tab.href}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.href}
                  id={tab.href}
                  to={generatePath(routes.authenticated.assignedFlights, {
                    id: id,
                    page: tab.href,
                  })}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'border-[#059e9b] text-[#059e9b]'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-medium',
                    )
                  }
                >
                  {tab.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
