const fs = require('fs-extra')
const shell = require('shelljs')
const path = require('path')
const os = require('os')

const DEPLOY_ENV = process.env.DEPLOY_ENV || 'staging'
const PROJECT_NAME = 'lisa-core'
const DEPLOYMENT_BRANCH = `docs-${DEPLOY_ENV}`
const REMOTE_BRANCH = 'git@github.com:LISTENAI/lisa-core.git'


function shellExecLog(cmd) {
    try {
        const result = shell.exec(cmd)
        console.log(
            `'CMD: ${cmd} (code: ${result.code})`,
        )
        return result
    } catch (e) {
        console.log(
            `'CMD: ${cmd} (code: ${result.code})`,
        )
        throw e
    }
}

(async () => {
    const currentCommit = shellExecLog('git rev-parse HEAD').stdout.trim();
    const fromPath = path.join(__dirname, 'docs')
    const toPath = await fs.mkdtemp(
        path.join(os.tmpdir(), `${PROJECT_NAME}-${DEPLOYMENT_BRANCH}`),
    );
    if (shellExecLog(`git clone ${REMOTE_BRANCH} ${toPath}`).code !== 0) {
        throw new Error(`Running "git clone" command in "${toPath}" failed.`);
    }
    shell.cd(toPath);
    const defaultBranch = shell
      .exec('git rev-parse --abbrev-ref HEAD')
      .stdout.trim();

    if (defaultBranch !== DEPLOYMENT_BRANCH) {
        if (shellExecLog(`git checkout origin/${DEPLOYMENT_BRANCH}`).code !== 0) {
            if (
                shellExecLog(`git checkout --orphan ${DEPLOYMENT_BRANCH}`).code !== 0
            ) {
                throw new Error(
                    `Running "git checkout ${DEPLOYMENT_BRANCH}" command failed.`,
                );
            }
        } else if (
            shellExecLog(`git checkout -b ${DEPLOYMENT_BRANCH}`).code +
            shellExecLog(
                `git branch --set-upstream-to=origin/${DEPLOYMENT_BRANCH}`,
            ).code !== 0
        ) {
            throw new Error(
                `Running "git checkout ${DEPLOYMENT_BRANCH}" command failed.`,
            );
        }
    }

    shellExecLog('git rm -rf .');

    try {
        await fs.copy(fromPath, toPath);
    } catch (error) {
        throw new Error(
          `Copying build assets from "${fromPath}" to "${toPath}" failed with error "${error}".`,
        );
    }

    shell.cd(toPath);
    shellExecLog('git add --all');
    const commitResults = shellExecLog(`git commit -m "Deploy docs - based on ${currentCommit}"`);

    if (
        shellExecLog(`git push --force origin ${DEPLOYMENT_BRANCH}`).code !== 0
    ) {
        throw new Error('Running "git push" command failed.');
    } else if (commitResults.code === 0) {
        shell.echo(`Docs 已deploy完成，文档文件在本仓库的 ${DEPLOYMENT_BRANCH} 分支`);
        shell.exit(0);
      }
})()
