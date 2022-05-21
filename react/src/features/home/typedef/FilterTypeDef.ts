export type FilterPopupStates = {
  breathingFilter: boolean,
  currentSort: string,
  isDescending: boolean,
  meditationFilter: boolean,
};

export type FilterPopupActions = {
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>,
  onToggleBreathing: (value: boolean) => void,
  onToggleDescending: (value: boolean) => void,
  onToggleMeditation: (value: boolean) => void,
};
