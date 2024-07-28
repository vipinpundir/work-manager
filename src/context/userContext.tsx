"use client"
import userService from '@/services/userService';
import { createContext, useState, ReactNode, useEffect } from 'react';

export const UserContext = createContext({});

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {

    const fetchCurrentUser = async () => {
      try {
        const response = await userService.currentUser();
        setUser(response?.data)
      } catch (error) {
        setUser(undefined)
      }
    }
    fetchCurrentUser()

  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
