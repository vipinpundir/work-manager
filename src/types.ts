// User Types
export interface User {
  _id: string;
  name: string;
  email: string;
  about: string;
  profileURL: string;
}

//   context types
export interface UserContextState {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Task form Types
export interface TaskData {
  _id: string;
  title: string;
  content: string;
  status: "pending" | "complete";
  userId?: string;
  addedDate: Date;
}

// Login form Types
export interface LoginData {
  email: string;
  password: string;
}

// Submit form Types
export interface SubmitData {
  name: string;
  email: string;
  password: string;
  about: string;
  profileURL: string;
}
