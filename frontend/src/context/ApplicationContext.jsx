import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <ApplicationContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </ApplicationContext.Provider>
  );
};
