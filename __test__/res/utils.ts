import lisa from '../../src'
const {fs} = lisa
import * as path from 'path'

const projectDir = async (type: string) => {
    const _projectDir = path.join(__dirname, '../__project__')
    const _testDir = path.join(_projectDir, `${type}/${new Date().toLocaleDateString()}_${Math.random().toString().slice(-6)}`)
    await fs.mkdirp(_testDir)
    return _testDir
}

const projectDirSync = (type: string) => {
    const _projectDir = path.join(__dirname, '../__project__')
    const _testDir = path.join(_projectDir, `${type}/${new Date().toLocaleDateString()}_${Math.random().toString().slice(-6)}`)
    fs.mkdirpSync(_testDir)
    return _testDir
}

const removeDir = async (type: string) => {
    const _projectDir = path.join(__dirname, '../__project__')
    const _testDir = path.join(_projectDir, `${type}`)
    await fs.remove(_testDir)
}

const changeCwd = (dir: string) => {
    process.chdir(dir)
    lisa.fs.project.root = dir
}

export {
    projectDir,
    projectDirSync,
    removeDir,
    changeCwd
}
