import path from 'path'
import tsconfig from '../../tsconfig.json'

export const WORKSPACE_DIR = path.join(__dirname, '../..')
export const resolvePath = (...p: string[]): string => path.join(WORKSPACE_DIR, ...p)

export const paths = {
  src: {
    root: resolvePath('src'),
  },
  alias: Object.entries(tsconfig.compilerOptions.paths)
    .filter(([key, val]) => val.length === 1)
    .map(([key, val]) => ({
      find: key.replace(/[*]$/, ''),
      replacement: '/' + val[0].replace(/[*]$/, ''),
    }))
    .filter(item => !/[*]/.test(item.find))
    .sort((x, y) => {
      if (x === y) return 0
      return x > y ? -1 : 1
    }),
}

export default paths
