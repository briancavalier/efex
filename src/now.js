// @flow
import { Effect } from './effect'

export type Now = () => number

export function now <S1: { now: Now }> (): Effect<S1, S1, number> {
  return new Effect(i => [i, i.now()])
}
