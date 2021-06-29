import { job, runner } from '../'
import { application, reloadApplication } from '../..'

test('test task is running', async () => {
  reloadApplication()
  job("test:task", {
    title: '测试任务',
    task: () => {
      application.root = "./out"
    }
  })

  expect(application.tasks).toHaveProperty("test:task")

  await runner("test:task")

  expect(application.root).toBe("./out")

  job("test:task-verbose", {
    title: '测试任务verbose',
    task: () => {
      application.root = "./out2"
    }
  })

  expect(application.tasks).toHaveProperty("test:task-verbose")

  await runner("test:task-verbose", {}, true)

  expect(application.root).toBe("./out2")
})