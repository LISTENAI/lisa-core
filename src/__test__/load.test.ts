import { config } from 'process'
import { isTemplateLiteralTypeSpan } from 'typescript'
import * as lisa from '../'
import { load, loadTask } from '../load'

test('test loadDependencies', () => {
  lisa.loadPackageJSON(require.resolve("../../test/_package.json"))
  lisa.loadDependencies()
  lisa.loadConfig()

  lisa.application.packageJSON = null
  lisa.loadDependencies()
  lisa.loadDevDependencies()

  lisa.loadPackageJSON(lisa.fs.project.join("package.json"))
  lisa.loadDependencies()
  lisa.loadDevDependencies()
})

test('test loadConfig js', () => {
  lisa.loadPackageJSON(require.resolve("../../test/_package.json"))
  lisa.loadConfig(require.resolve("../../test/config.js"))
  expect(lisa.application.root).toBe("./out1")
})

test('test loadConfig ts', () => {
  lisa.loadPackageJSON(require.resolve("../../test/_package.json"))
  lisa.loadConfig(require.resolve("../../test/config.ts"))
  expect(lisa.application.root).toBe("./out")
})

test('load other test', () => {
  loadTask(lisa.fs.project.join("./test/task.js"))
  load()
})