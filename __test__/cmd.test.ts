import lisa from '../src'

describe('测试 cmd', () => {
    test('test: echo', async () => {
        const res = await lisa.cmd('echo', ['hahahaha'])
        const bool = res.stdout.indexOf('hahahaha') >= 0
        expect(bool).toEqual(true)
    })
})