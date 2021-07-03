import dayjs from 'dayjs';

const taskStatusMap = {
  FAIL: 'fail',
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
  HURRY: 'hurry',
};

const defaultDateFormat = 'YYYY-MM-DD HH:mm:ss';

const getTaskStatusWithDate = (taskDate, isDone, dateFormat = defaultDateFormat) => {
  const now = dayjs();
  const checkingDate = dayjs(taskDate, dateFormat);

  const difference = checkingDate.diff(now);
  if (difference > 0) {
    if (isDone) {
      return taskStatusMap.SUCCESS;
    } else {
      const nowPlusThreeHour = now.add(3, 'hour');
      const isInLastThreeHour = checkingDate.diff(nowPlusThreeHour) <= 0;
      return isInLastThreeHour ? taskStatusMap.HURRY : taskStatusMap.NEUTRAL;
    }
  } else {
    return taskStatusMap.FAIL;
  }
};

export { getTaskStatusWithDate };
