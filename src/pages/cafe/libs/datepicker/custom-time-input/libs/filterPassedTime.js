import { isToday } from 'date-fns';

export const filterPassedTime = (date, timeBoxes) => {
    const currentDate = new Date();

    if (isToday(date)) {
      return timeBoxes.filter((timeBox) => {
        const selectedDate = new Date();
        selectedDate.setHours(timeBox.hours);
        selectedDate.setMinutes(timeBox.minutes);

        return currentDate.getTime() < selectedDate.getTime();
      });
    } else {
      return timeBoxes;
    }
  };