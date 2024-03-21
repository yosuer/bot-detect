export type Result = 'ok' | 'warning' | 'danger';

export interface Module {
  start(): Promise<void> | void;
}
