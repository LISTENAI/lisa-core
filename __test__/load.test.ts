import {loadPackageJSON, load} from '../src'
import lisa from '../src'
import {projectDir, projectDirSync, removeDir, changeCwd, } from './res/utils'
import * as path from 'path'

const {fs} = lisa
const TEST_TYPE = 'load'

describe('测试 load.ts', () => {
    afterAll(async () => {
        await removeDir(TEST_TYPE)
    })
    test('test: loadPackageJSON', async () => {
        loadPackageJSON(path.join(__dirname, './res/project/package.json'))
        const targetJson = require(path.join(__dirname, './res/project/package.json'))
        expect(lisa.application.packageJSON).toEqual(targetJson)
    })
    test('test: load', async () => {
        // 模拟一个项目目录,包含package.json,task.js 和 一个test包
        const TEST_DIR = await projectDir(TEST_TYPE)
        await fs.copy(path.join(__dirname, './res/project'), path.join(TEST_DIR))
        await fs.copy(path.join(__dirname, './res/testlib'), path.join(TEST_DIR, 'node_modules/jesttest'))
        // 更改执行目录
        const baseCwd = process.cwd()
        changeCwd(TEST_DIR)

        const core = load()
        const taskKeys = Object.keys(core.application.tasks)
        // 是否已成功加载对应的task
        const taskLoadSuccess = taskKeys.includes('test') && taskKeys.includes('project:test')
        // 更改回原执行目录,方便删除测试目录
        changeCwd(baseCwd)

        expect(taskLoadSuccess).toBeTruthy()

    })
})