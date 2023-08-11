export const calculateTotalHours = (dailyData: any) => {
  let totalHours = 0;
  for (const entry of dailyData) {
    if (entry.firstIn && entry.lastOut) {
      const firstIn: any = new Date(entry.firstIn);
      const lastOut: any = new Date(entry.lastOut);
      const hoursWorked = (lastOut - firstIn) / (1000 * 60 * 60); // Convert milliseconds to hours
      totalHours += hoursWorked;
    }
  }
  return totalHours;
};
