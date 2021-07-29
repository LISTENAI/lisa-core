import lisa from '../src'
import {projectDir, projectDirSync, removeDir, changeCwd, } from './res/utils'
import * as path from 'path'
const {fs} = lisa

declare global {
    namespace jest {
        interface Matchers<R> {
            toBePathExists(): R;
        }
    }
}
  
expect.extend({
    async toBePathExists(path: string) {
        const value = await fs.pathExists(path)
        return {
            message: () => value ? '' : `${path} 路径检查失败`,
            pass: value
        }
    }
})

const TEST_TYPE = 'fs'

describe('测试 fs.ts', () => {
    afterAll(async () => {
        await removeDir(TEST_TYPE)
    })
    test('test: 原fs', async () => {
        expect(fs.hasOwnProperty('existsSync')).toBeTruthy()
        expect(fs.hasOwnProperty('project')).toBeTruthy()
    })
    test('test: fs.project', async () => {
        // 模拟一个项目目录
        const TEST_DIR = await projectDir(TEST_TYPE)
        fs.project.root = TEST_DIR
        expect(fs.project.root).toBe(TEST_DIR)

        fs.project.template_path = path.join(__dirname, 'res/template') 
        expect(fs.project.template_path).toBe(path.join(__dirname, 'res/template') )

        fs.project.download_path = path.join(TEST_DIR, 'download')
        expect(fs.project.download_path).toBe(path.join(TEST_DIR, 'download'))

        var _info_log = ""
        var _method = ""
        fs.project.info = (method, data) => {
            _method = method
            _info_log = data
        }
        fs.project.info('test', "data")
        expect(_info_log).toBe("data")

        fs.project.error = (method, data) => {
            _method = method
            _info_log = data
        }
        fs.project.error('test', 'error')
        expect(_info_log).toBe('error')

        await fs.project.mkdir('./demo')
        await expect(fs.project.join('./demo')).toBePathExists()

        await fs.project.touch("./test.c")
        await expect(fs.project.join('./test.c')).toBePathExists()

        await fs.project.copy("config.js", "config.js")
        await expect(fs.project.join('config.js')).toBePathExists()

        await fs.project.template("./test.json.ejs", "test.json", {name: "lisa"})
        const json = await fs.readJSON(fs.project.join('test.json'))
        expect(json.name).toBe("lisa")
    })
    
    test('test: download', async () => {
        // 模拟一个项目目录
        const TEST_DIR = await projectDir(TEST_TYPE)
        fs.project.root = TEST_DIR
        fs.project.download_path = path.join(TEST_DIR, 'download')
        await fs.project.downloadFile({
            url: 'https://cdn.iflyos.cn/public/skills/app/poetry_challenge/btn_small.png',
            fileName: 'test.png',
        })
        await expect(path.join(TEST_DIR, 'download/test.png')).toBePathExists()
    })

    
    test('test: unzip', async () => {
        // 模拟一个项目目录
        const TEST_DIR = await projectDir(TEST_TYPE)
        fs.project.root = TEST_DIR
        const zipPath = path.join(__dirname, 'res/template/burner.lpk')
        await fs.project.unzip(zipPath, fs.project.join('./lpk'))
        await expect(path.join(TEST_DIR, "lpk/manifest.json")).toBePathExists()
    })
})