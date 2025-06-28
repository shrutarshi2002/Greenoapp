import AsyncStorage from "@react-native-async-storage/async-storage";

// Get current user's data from local storage
export const getUserData = async (userId) => {
  try {
    const userData = await AsyncStorage.getItem(`userData_${userId}`);
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};

// Update user's points in local storage
export const updateUserPoints = async (userId, pointsToAdd) => {
  try {
    const userData = await AsyncStorage.getItem(`userData_${userId}`);
    let currentData = userData ? JSON.parse(userData) : { points: 0 };

    const newPoints = (currentData.points || 0) + pointsToAdd;
    const updatedData = { ...currentData, points: newPoints };

    await AsyncStorage.setItem(
      `userData_${userId}`,
      JSON.stringify(updatedData)
    );
    return newPoints;
  } catch (error) {
    console.error("Error updating user points:", error);
    throw error;
  }
};

// Add donation to user's history in local storage
export const addDonationToHistory = async (userId, donationData) => {
  try {
    const userData = await AsyncStorage.getItem(`userData_${userId}`);
    let currentData = userData ? JSON.parse(userData) : { donations: [] };

    const currentDonations = currentData.donations || [];
    const updatedDonations = [
      ...currentDonations,
      {
        ...donationData,
        timestamp: new Date().toISOString(),
      },
    ];

    const updatedData = { ...currentData, donations: updatedDonations };
    await AsyncStorage.setItem(
      `userData_${userId}`,
      JSON.stringify(updatedData)
    );

    return updatedDonations;
  } catch (error) {
    console.error("Error adding donation to history:", error);
    throw error;
  }
};

// Check if user is authenticated
export const isAuthenticated = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");
    return userData !== null;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};

// Get current user ID
export const getCurrentUserId = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      return user.uid;
    }
    return null;
  } catch (error) {
    console.error("Error getting current user ID:", error);
    return null;
  }
};

// Get current user email
export const getCurrentUserEmail = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      return user.email;
    }
    return null;
  } catch (error) {
    console.error("Error getting current user email:", error);
    return null;
  }
};

// Get current user display name
export const getCurrentUserDisplayName = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      return user.displayName;
    }
    return null;
  } catch (error) {
    console.error("Error getting current user display name:", error);
    return null;
  }
};
