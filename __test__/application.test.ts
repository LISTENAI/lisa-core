import lisa from '../src'
const { application, cmd } = lisa
import { PipelineObject } from '../src'
import {projectDir, projectDirSync, removeDir, changeCwd, } from './res/utils'
import * as path from 'path'

const TEST_TYPE = 'application'

describe('测试 application', () => {
  afterAll(async () => {
    await removeDir(TEST_TYPE)
  })

  test('test: pipeline object', async () => {
    const pipelineObject = new PipelineObject()
    expect(pipelineObject).toHaveProperty('desc')
    expect(pipelineObject).toHaveProperty('tasks')
  })

  test('test: application context', () => {
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

  test('test: application 基础属性测试', () => {
    expect(application).toHaveProperty('tasks')
    expect(application).toHaveProperty('packageJSON')
    expect(application).toHaveProperty('lpmRegistryUrl')
    expect(application).toHaveProperty('apiHost')
    expect(application).toHaveProperty('apiPrefix')
    expect(application).toHaveProperty('template_path')
    expect(application).toHaveProperty('download_path')
    expect(application).toHaveProperty('task_path')
    expect(application).toHaveProperty('pipeline')
    expect(application).toHaveProperty('context')
    expect(application).toHaveProperty('argv')
  })

  test('test: application config', () => {
    application.configuration((config) => {
      config.root = "./out"
    })
  
    expect(application.root).toBe("./out")
  })

  test('测试gitignore', async () => {
    // 模拟一个项目目录
    const TEST_DIR = await projectDir(TEST_TYPE)
    application.gitignore(path.join(TEST_DIR, './.gitignore'), ['node_modules', 'asdfasdf'])
  })

  test('测试getPluginByName', async () => {
    // 模拟一个项目目录
    const plugin = await application.getPluginByName('zephyr')
    expect(plugin.pluginName).toBe(undefined)
  })

})

