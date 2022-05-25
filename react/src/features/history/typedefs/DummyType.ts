export enum SessionType {
  Meditation,
  Breathing,
}

export type DummyType = {
  name: string,
  type: SessionType,
  timestamp: number,
};
