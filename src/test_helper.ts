/**
 * 移动到core之中
 */
import { fs } from './'

export async function mockArgv(args: any, func: any) {
  if (typeof args === 'function') {
    func = args
    args = []
  }
  const oldArgv = process.argv
  process.argv = [...oldArgv, ...args]
  try {
    await func()
  } finally {
    process.argv = oldArgv
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBePathExists(): R;
    }
  }
}

expect.extend({
  async toBePathExists(path: string) {
    const value = await fs.pathExists(fs.project.join(path))
    return {
      message: () => value ? '' : `${path} 路径检查失败`,
      pass: value
    }
  }
})