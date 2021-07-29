import lisa from '../src'

describe('测试 task.ts', () => {
    test('test: job方法', async () => {
        // 注册一个task
        lisa.job('testjob', {
            title: "测试job",
            task: async () => {}
        })
        // 判断是否注册成功
        const taskKeys = Object.keys(lisa.application.tasks)
        expect(taskKeys.includes('testjob')).toBeTruthy()
    })
    test('test: runner方法', async () => {
        // 注册一个task
        lisa.job('testrunner', {
            title: "测试runner",
            task: async (ctx, task) => {
                ctx.success = true
            }
        })
        // 执行
        const res = await lisa.runner('testrunner')
        expect((res as {
            [key: string]: string
        }).success).toBeTruthy()
    })
})