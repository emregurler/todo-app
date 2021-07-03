const filterTypeMap = {
  ALL: 'all',
  DONE: 'done',
  ACTIVE: 'active',
};

const templateModeMap = {
  EDIT: 'edit',
  ADD: 'add',
  LIST: 'list',
};

const taskStatusMap = {
  FAIL: 'fail',
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
  HURRY: 'hurry',
};

const deadlineTextMap = {
  fail: 'You are late :(',
  success: 'Congrats!',
  neutral: '',
  hurry: "Hurry up, it's almost time!",
};

export { filterTypeMap, templateModeMap, taskStatusMap, deadlineTextMap };
