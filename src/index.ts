/**
 * Lisa Core 是 Lisa Framework 的核心框架，用于项目创建，Task 支持等能力
 */

/**
  引用Listr来执行task指令
*/
import {Listr} from 'listr2'
import * as Execa from 'execa'
import _got from 'got'
import cli from 'cli-ux'

import { Application } from './application'
import * as fs from './fs'
import * as task from './task'
import Exec from './exec'

let _Tasks: typeof Listr | undefined
let _Execa: typeof Execa | undefined

export default (new Proxy({}, {
    get(target, key) {
        switch(key) {
            case 'Tasks':
                if (!_Tasks) {
                    _Tasks = require('listr2').Listr
                }
                target = (_Tasks as typeof Listr)
                break
            case 'cmd':
                if (!_Execa) {
                    _Execa = require('execa')
                }
                target = (_Execa as typeof Execa)
                break
            case 'got':
                target = _got
                break
            case 'application':
                if (!(global as any)._application) {
                    (global as any)._application = new Application()
                }
                target = ((global as any)._application as Application)
                break
            case 'fs':
                if (!(global as any)._fs) {
                    (global as any)._fs = require('./fs')
                }
                target = ( (global as any)._fs as typeof fs)
                break
            case 'job':
                target = task.job
                break
            case 'runner':
                target = task.runner
                break
            case 'cli':
                if (!(global as any)._cli) {
                    (global as any)._cli = require('cli-ux').cli
                }
                target = ( (global as any)._cli as typeof cli)
                break
            case 'exec':
                target = Exec
                break
            default:
                break
        }
        return target
    }
}) as unknown as {
    Tasks: typeof Listr,
    cmd: typeof Execa,
    got: typeof _got,
    application: Application,
    fs: typeof fs,
    job: typeof task.job,
    runner: typeof task.runner,
    cli: typeof cli,
    exec: typeof Exec
})

export * from './application'
export * from './argv'
export * from './load'