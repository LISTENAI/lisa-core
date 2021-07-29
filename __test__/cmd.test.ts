import lisa from '../src'

describe('测试 cmd', () => {
    test('test: echo', async () => {
        const res = await lisa.cmd('echo', ['hahahaha'])
        expect(res.stdout).toEqual(`"hahahaha"`)
    })
})