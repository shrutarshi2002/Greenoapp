export const calculateCarbonSavings = (itemType, quantity) => {
  // Carbon savings in kg CO2 per kg of material
  const carbonFactors = {
    Plastic: 2.5,
    Glass: 0.8,
    "Aluminum Cans": 8.0,
    "Old Mobiles": 0.5,
    "Waste Paper": 1.0,
  };

  return quantity * (carbonFactors[itemType] || 1.0);
};

export const calculatePoints = (itemType, quantity) => {
  // Points per kg of material
  const pointFactors = {
    Plastic: 10,
    Glass: 8,
    "Aluminum Cans": 15,
    "Old Mobiles": 20,
    "Waste Paper": 5,
  };

  return Math.round(quantity * (pointFactors[itemType] || 5));
};
