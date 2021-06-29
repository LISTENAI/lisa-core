import { application, fs } from '../../.'

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

beforeEach(() => {
  fs.reloadProject()
  application.root = "./out"
})

afterEach(() => {
  fs.removeSync("./out")
})

test("project 属性测试", async () => {
  fs.project.root = "./out"
  expect(fs.project.root).toBe("./out")

  fs.project.template_path = './template'
  expect(fs.project.template_path).toBe('./template')

  fs.project.download_path = './out/download'
  expect(fs.project.download_path).toBe('./out/download')

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
})

test('脚手架方法测试', async () => {
  await fs.project.mkdir("./demo")
  await expect("./out/demo").toBePathExists()

  await fs.project.touch("./test.c")
  await expect("./out/test.c").toBePathExists()

  await fs.project.copy("../test/config.js", "config.js")
  await expect("./out/config.js").toBePathExists()

  fs.project.template_path = "./test"
  await fs.project.template("./test.json.ejs", "test.json", {name: "lisa"})
  const json = await fs.readJSON("./out/test.json")
  expect(json.name).toBe("lisa")
})

test('download test', async () => {
  application.download_path = "./out"
  await fs.project.downloadFile({
    url: 'https://cdn.iflyos.cn/public/skills/app/poetry_challenge/btn_small.png',
    fileName: 'test.png',
  })
  await expect("./out/test.png").toBePathExists()
})

test('unzip test', async () => {
  const zipPath = fs.project.join('../test/burner.lpk')
  await fs.project.unzip(zipPath, fs.project.join('./lpk'))
  await expect("./out/lpk/manifest.json").toBePathExists()
})