import { reducers } from './combine-reducers';

export type RootState = ReturnType<typeof reducers>;
