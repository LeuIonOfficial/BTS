import { QueryClient } from '@tanstack/react-query';

const queryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    },
  },
});

export default queryConfig;
