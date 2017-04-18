// @flow
import { Effect } from './effect'

export type Process = {
  env: { [name: string]: ?string }
}

export function getEnv <S1: { process: Process }> (name: string): Effect<S1, S1, ?string> {
  return new Effect(i => [i, i.process.env[name]])
}
