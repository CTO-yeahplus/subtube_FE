import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ContainerWrapper: React.FC<Props> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : null;
};

export default ContainerWrapper;
