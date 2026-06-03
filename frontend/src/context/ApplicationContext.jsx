import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const ApplicationContext = createContext();

export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }) => {
  const { user, openAuthModal } = useAuth();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    if (!user) {
      // Prompt user to login if they are not authenticated
      openAuthModal();
    } else {
      setIsFormOpen(true);
    }
  };
  const closeForm = () => setIsFormOpen(false);

  return (
    <ApplicationContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </ApplicationContext.Provider>
  );
};
