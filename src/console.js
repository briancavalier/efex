// @flow
import { Effect } from './effect'

export type Console = {
  debug: (...args: Array<any>) => void,
  info: (...args: Array<any>) => void,
  warn: (...args: Array<any>) => void,
  error: (...args: Array<any>) => void
}

export function debug <S1: { console: Console }, A> (a: A): Effect<S1, S1, A> {
  return new Effect(i => [i, (i.console.debug(a), a)])
}

export function info <S1: { console: Console }, A> (a: A): Effect<S1, S1, A> {
  return new Effect(i => [i, (i.console.info(a), a)])
}

export function warn <S1: { console: Console }, A> (a: A): Effect<S1, S1, A> {
  return new Effect(i => [i, (i.console.warn(a), a)])
}

export function error <S1: { console: Console }, A> (a: A): Effect<S1, S1, A> {
  return new Effect(i => [i, (i.console.error(a), a)])
}
