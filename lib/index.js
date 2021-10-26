"use strict";
/**
 * Lisa Core 是 Lisa Framework 的核心框架，用于项目创建，Task 支持等能力
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = require("got");
const application_1 = require("./application");
const task = require("./task");
const exec_1 = require("./exec");
let _Tasks;
let _Execa;
exports.default = new Proxy({}, {
    get(target, key) {
        switch (key) {
            case 'Tasks':
                if (!_Tasks) {
                    _Tasks = require('listr2').Listr;
                }
                target = _Tasks;
                break;
            case 'cmd':
                if (!_Execa) {
                    _Execa = require('execa');
                }
                target = _Execa;
                break;
            case 'got':
                target = got_1.default;
                break;
            case 'application':
                if (!global._application) {
                    global._application = new application_1.Application();
                }
                target = global._application;
                break;
            case 'fs':
                if (!global._fs) {
                    global._fs = require('./fs');
                }
                target = global._fs;
                break;
            case 'job':
                target = task.job;
                break;
            case 'runner':
                target = task.runner;
                break;
            case 'cli':
                if (!global._cli) {
                    global._cli = require('cli-ux').cli;
                }
                target = global._cli;
                break;
            case 'exec':
                target = exec_1.default;
                break;
            default:
                break;
        }
        return target;
    }
});
__exportStar(require("./application"), exports);
__exportStar(require("./argv"), exports);
__exportStar(require("./load"), exports);
//# sourceMappingURL=index.js.map