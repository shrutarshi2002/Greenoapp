import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored locally
    const checkUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const login = async (email, password) => {
    // Simple mock authentication - in a real app, you'd implement your own auth logic
    const mockUser = {
      uid: Date.now().toString(),
      email: email,
      displayName: email.split("@")[0],
    };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      return { success: true };
    } catch (error) {
      console.error("Error saving user data:", error);
      return { success: false, error: "Failed to save user data" };
    }
  };

  const signup = async (email, password, displayName) => {
    // Simple mock registration
    const mockUser = {
      uid: Date.now().toString(),
      email: email,
      displayName: displayName,
    };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      return { success: true };
    } catch (error) {
      console.error("Error saving user data:", error);
      return { success: false, error: "Failed to save user data" };
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Error removing user data:", error);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
