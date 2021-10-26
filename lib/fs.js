"use strict";
/**
 * @module fs
 * 文件操作模块，用于项目中文件快速操作
 * @module
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
exports.project = exports.Project = void 0;
const project_1 = require("./project");
/**
 * @packageDocumentation
 */
var project_2 = require("./project");
Object.defineProperty(exports, "Project", { enumerable: true, get: function () { return project_2.Project; } });
/**
 * @packageDocumentation
 */
__exportStar(require("fs-extra"), exports);
/**
 * 项目主路径，默认为命令行运行的当前的目录
 */
exports.project = new project_1.Project();
//# sourceMappingURL=fs.js.map