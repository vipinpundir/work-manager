"use client"
import Spinner from '@/components/Spinner';
import userService from '@/services/userService';
import { createContext, useState, ReactNode, useEffect } from 'react';

export const UserContext = createContext({});

// context provider 
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await userService.currentUser();
        setUser(response?.data)
      } catch (error) {
        setUser(undefined)
      }finally{
        setLoading(false)
      }
    }
    fetchCurrentUser()

  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading? <Spinner /> : ''}
      {children}
    </UserContext.Provider>
  );
};
