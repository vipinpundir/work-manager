"use client"
import Spinner from '@/components/Spinner';
import userService from '@/services/userService';
import { User, UserContextState } from '@/types';
import { createContext, useState, ReactNode, useEffect } from 'react';

const defaultUserContextState: UserContextState = {
  user: null,
  setUser: () => {}, 
};
export const UserContext = createContext<UserContextState>(defaultUserContextState);


// context provider 
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await userService.currentUser();
        setUser(response?.data)
      } catch (error) {
        setUser(null)
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
