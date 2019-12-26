### day2 了解GIT项目基本知识 2019-12-25
#### 常用术语
术语 | 术语 | 备注 |
---|---|---|---|
Repository | 仓库 | 受版本控制的所有文件修订历史的共享数据库
Workspace | 工作空间 | 本地硬盘或Unix 用户帐户上编辑的文件副本
Working tree | 工作树/区 | 工作区中包含了仓库的工作文件。您可以修改的内容和提交更改作为新的提交到仓库
Staging area | 暂存区 | 暂存区是工作区用来提交更改（commit）前可以暂存工作区的变化
Index | 索引 | 索引是暂存区的另一种术语
Checkin | 签入 | 将新版本复制回仓库
Checkout | 签出 | 从仓库中将文件的最新修订版本复制到工作空间
Commit | 提交 | 对各自文件的工作副本做了更改，并将这些更改提交到仓库
Conflict | 冲突 | 多人对同一文件的工作副本进行更改，并将这些更改提交到仓库
Merge | 合并 | 将某分支上的更改联接到此主干或同为主干的另一个分支
Branch | 分支 | 从主线上分离开的副本，默认分支叫master
Lock | 锁 | 获得修改文件的专有权限
HEAD | 头 | 头是一个象征性的参考，最常用以指向当前选择的分支
Revision | 修订 | 表示代码的一个版本状态。Git通过用SHA1 hash算法表示的ID来标识不同的版本。
Tags | 标记 | 标记指的是某个分支某个特定时间点的状态。通过标记，可以很方便的切换到标记时的状态。
```
工作区 ——————————————> 暂存区 ——————————————> 版本库
         git add              git commit
```

#### GIT配置
```
- git config -l                 查看现在的git环境详细配置
- git config --system --list    查看系统config
- git config --global --list    查看当前用户（global）配置
- git config --local --list     查看当前仓库配置信息
- git config --global user.name "name"      设置用户名
- git config --global user.email "email"    设置用户邮箱

- 使用 open -e .gitconfig 查看当前项目或者系统配置项（配置文件均为.文件，mac无法直接看到）

- 具体关于git配置命令参考[git学习地址](https://www.cnblogs.com/best/p/7474442.html)
```
