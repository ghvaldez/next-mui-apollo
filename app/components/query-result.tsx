import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({
  loading,
  error,
  data,
  children,
}): React.ReactElement<any, any> | null => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading < 7) {
    return (
      <CircularProgress variant="indeterminate" color="secondary"/>
    );
  }
  if (data) {
    return <>{children}</>;
  }
  return <p>Nothing to show...</p>;
};

export default QueryResult;