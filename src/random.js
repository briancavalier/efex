// @flow

import { Effect } from './effect'
import MersenneTwister from 'mersennetwister'

export type Random = {
  random: () => number
}

export const random: Random = new MersenneTwister()

export function rand <S1: { random: Random }> (): Effect<S1, S1, number> {
  return new Effect(s => [s, s.random.random()])
}

export function seed <S1: { random: Random }> (s: number): Effect<S1, S1, void> {
  // buble fails on object rest/spread, so have to use
  // the ugly Object.assign version
  // return new Effect(({ random, ...ss }) => [{ random: new MersenneTwister(s), ...ss }, undefined])
  return new Effect(s => [Object.assign({}, s, { random: new MersenneTwister(seed) }), undefined])
}
