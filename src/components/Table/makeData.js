export const generateItems = (numItems) =>
  Array(numItems)
      .fill(true)
      .map((_) => ({
        isActive: false,
        label: Math.random()
            .toString(36)
            .substr(2)
      }));
