export enum SessionType {
  Meditation = 'Meditation',
  Breathing = 'Breathing',
}

export type DummyType = {
  name: string,
  type: SessionType,
  timestamp: number,
};
