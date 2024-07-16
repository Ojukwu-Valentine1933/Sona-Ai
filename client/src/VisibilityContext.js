import React, { createContext, useState } from 'react';

const VisibilityContext = createContext();

const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <VisibilityContext.Provider value={{ isVisible, handleButtonClick }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export { VisibilityContext, VisibilityProvider };
