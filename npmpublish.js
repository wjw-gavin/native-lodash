const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const execa = require('execa')
const ora = require('ora')
const { version, name: pkgName } = require('./package.json')

const pkgPath = path.resolve(__dirname, './package.json')

const pkg = fs.readFileSync(pkgPath, 'utf-8')
const newVersion = `${version.replace(/\D/g, '') - '' + 1}`
  .padStart(3, '0')
  .split('')
  .join('.')
const newPkg = pkg.replace(version, newVersion)

const loading = {
  spinner: ora(''),
  show(msg = 'Loading') {
    this.spinner.text = msg
    this.spinner.start()
  },
  hide() {
    this.spinner.stop()
  }
}

;(async () => {
  const { updateVer } = await inquirer.prompt({
    type: 'confirm',
    name: 'updateVer',
    message: `版本号即将从 ${chalk.yellow(`v${version}`)} 变更为 -> ${chalk.yellow(
      `v${newVersion}`
    )} ，是否继续\n`
  })

  if (updateVer) {
    fs.writeFileSync(pkgPath, newPkg)
    try {
      loading.show('npm发布中...\n')
      await execa('npm', ['publish'])
    } catch (err) {
      console.log(err.stdout)
      return
    }
    loading.hide()
  }

  if (!updateVer) return

  const { autoGitCommit } = await inquirer.prompt({
    type: 'confirm',
    name: 'autoGitCommit',
    message: '自动提交package.json文件到远程仓库？\n'
  })

  if (autoGitCommit) {
    loading.show('执行命令中...\n')
    try {
      const { stdout: branchName } = await execa('git', [
        'rev-parse',
        '--abbrev-ref',
        'HEAD'
      ])
      await execa('git', ['add', 'package.json'])
      await execa('git', ['commit', '-m', `release: ${newVersion}`])
      await execa('git', ['push', 'origin', branchName])
    } catch (err) {
      console.log(err.stdout)
    }

    loading.hide()
  }

  console.log(`\n🎉 ${chalk.green('npm发布成功!!')} `)
  console.log(
    `\n👉 输入命令 ${chalk.green(
      `npm install -S ${pkgName}`
    )} 更新至最新版本 ${chalk.yellow(`v${newVersion}`)} \n`
  )
})()
