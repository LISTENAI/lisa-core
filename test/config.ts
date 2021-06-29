import * as lisa from '../lib'

export default ({application, fs, ...core}=lisa) => {
  application.configuration((config) => {
    config.root = "./out"
    config.task_path = "./task"
  })
}