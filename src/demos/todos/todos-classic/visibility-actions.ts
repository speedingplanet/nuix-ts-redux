import { HideCompleted } from '../todos-shared';

export const actions = {
  toggleVisibility: 'TOGGLE_VISIBILITY',
};

export const toggleVisibility = ( ...args: Parameters<HideCompleted> ) => {
  return {
    type: actions.toggleVisibility,
  };
};
