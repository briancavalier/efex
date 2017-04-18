import buble from 'rollup-plugin-buble'
import flow from 'rollup-plugin-flow'
import node from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  plugins: [
    flow(),
    buble(),
    node({
      module: true,
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/mersennetwister/**',
    })
  ],
  targets: [
    {
      dest: 'dist/index.js',
      format: 'umd',
      moduleName: 'efex',
      sourceMap: true
    },
    {
      dest: 'dist/index.es.js',
      format: 'es',
      sourceMap: true
    }
  ]
}
