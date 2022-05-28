export type SessionItem = {
  id: number,
  type: string,
  title: string,
  description: string,
};

export type SessionData = {
  meditations: SessionItem[],
  breaths: SessionItem[],
};
