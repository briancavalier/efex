// @flow

export class Effect<S1: {}, S2: {}, A> {
  _run: (S1) => [S2, A];

  constructor(run: (S1) => [S2, A]) {
    this._run = run
  }

  runEffect (s1: S1): [S2, A] {
    const run = this._run
    return run(s1)
  }

  map <B> (f: (A) => B): Effect<S1, S2, B> {
    const run = this._run
    return new Effect(s1 => {
      const [s2, a] = run(s1)
      return [s2, f(a)]
    })
  }

  chain <S3: {}, B>(f: (A) => Effect<S2, S3, B>): Effect<S1, S3, B> {
    const run = this._run
    return new Effect(s1 => {
      const [s2, a] = run(s1)
      return f(a).runEffect(s2)
    })
  }
}

export function runEffect <S1: {}, S2: {}, A> (effects: S1, st: Effect<S1, S2, A>): A {
  return st.runEffect(effects)[1]
}
