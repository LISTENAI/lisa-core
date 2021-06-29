import { application, reloadApplication } from '../'
import { PipelineObject } from '../application'

beforeEach(() => {
  reloadApplication()
})

test('pipeline object', () => {
  const pipelineObject = new PipelineObject()
  expect(pipelineObject).toHaveProperty('desc')
  expect(pipelineObject).toHaveProperty('tasks')
})

test('application context', () => {
  application.addContext('lisa', {
    name: 'lisa'
  })
  expect(application.getContextFromPackageName('lisa').name).toBe('lisa')

  application.addGlobalContext({
    name: 'lisa global'
  })

  expect(application.context.name).toBe('lisa global')
  expect(application.getContextFromPackageName('lisa_core')).toMatchObject({})
})

test('application 基础属性测试', () => {
  expect(application).toHaveProperty('tasks')
  expect(application).toHaveProperty('packageJSON')
  expect(application).toHaveProperty('lscloudPersonalToken')
  expect(application).toHaveProperty('lisaAccessToken')
  expect(application).toHaveProperty('lpmRegistryUrl')
  expect(application).toHaveProperty('apiHost')
  expect(application).toHaveProperty('apiPrefix')
  expect(application).toHaveProperty('firmwareConfiguration')
  expect(application).toHaveProperty('hardwareConfiguration')
  expect(application).toHaveProperty('version')
  expect(application).toHaveProperty('description')
  expect(application).toHaveProperty('template_path')
  expect(application).toHaveProperty('download_path')
  expect(application).toHaveProperty('task_path')
  expect(application).toHaveProperty('pipeline')
  expect(application).toHaveProperty('context')
  expect(application).toHaveProperty('argv')
})


test('application config', () => {
  application.configuration((config) => {
    config.root = "./out"
  })

  expect(application.root).toBe("./out")
})

test('application validateConfig', async () => {
  application.version = "1.x.1"
  expect(await application.validateConfig()).toBe(false)
  expect(application.errors.length).toBe(1)

  application.version = '1.2.0'
  expect(await application.validateConfig()).toBe(true)
})

test('测试 LISA ENV', () => {
  expect(application.env()).toBe("test")

  process.env.LISA_ENV = 'prod'
  expect(application.env()).toBe("prod")

  process.env.LISA_ENV = 'test'
  expect(application.env()).toBe("test")

  process.env.LISA_ENV = 'this is test other'
  expect(application.env()).toBe("dev")
})

test('测试gitignore', () => {
  application.gitignore('./.gitignore', ['node_modules', 'asdfasdf'])
})

test('测试日志上传到日志服务', async () => {
  await application.logReport({
    type: 'test',
    project_name: '测试项目',
    version: '1.0.1',
    content: '123',
    res: 'pass',
    cid: '4002',
    csk_commit: 'miniEsrVersion 1266',
  })
})

