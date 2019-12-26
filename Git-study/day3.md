### day3 协同开发指令 2019-12-26
#### 工作流程
![image](./assets/git.png)
- Workspace：工作区，就是你平时存放项目代码的地方
- Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息
- Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本
- Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换
- .git：存放Git管理信息的目录，初始化仓库的时候自动创建

#### 协同指令 
##### 1、初始
```
-   git init            在当前目录下创建一个Git代码库
    git init [projectname]     创建一个命名为projectname的代码库
    项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。

-   git clone [url]     克隆一个项目和它的整个代码历史(版本信息)
```
##### 2、查看状态
```
-   git status          查看所有文件状态
    git status [filename]       查看指定文件状态
    Untracked       未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.
    Unmodify        文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 
                    如果它被修改, 而变为Modified. 
                    如果使用git rm移出版本库, 则成为Untracked文件
    Modified        文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处,
                    通过git add可进入暂存staged状态, 
                    使用git checkout 则丢弃修改过, 返回到unmodify状态, 
                    这个git checkout即从库中取出文件, 覆盖当前修改
    Staged          暂存状态. 
                    执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 
                    执行git reset HEAD filename取消暂存, 文件状态为Modified
```
##### 3、添加文件至暂存区
```
-   git add .                   添加当前目录的所有文件到暂存区
    git add [dir]               添加指定目录到暂存区，包括子目录
    git add [file1] [file2] ... 添加指定文件到暂存区
```
##### 4、移除文件（撤销add操作）
```
-   git rm --cached <file>      直接从暂存区删除文件，工作区则不做出改变
    git rm <file>               不但从stage中删除，同时删除物理文件
    git reset HEAD <file>...    如果已经用add 命令把文件加入stage了，就先需要从stage中撤销.
                                暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。

-   git clean [options]         移除所有未跟踪文件
                                一般会加上参数-df，-d表示包含目录，-f表示强制清除。
```
##### 5、比较差异
```
-   git diff [files]            查看文件修改后的差异
    git diff --cached           比较暂存区的文件与之前已经提交过的文件
    git diff HEAD~n             比较repo与工作空间中的文件差异
```
##### 6、签出
```
-   git checkout branch         检出branch分支。要完成图中的三个步骤，更新HEAD以指向branch分支，以及用branch指向的树更新暂存区和工作区。
    git checkout                汇总显示工作区、暂存区与HEAD的差异。
    git checkout HEAD           同上
    git checkout -- filename    用暂存区中filename文件来覆盖工作区中的filename文件。
                                相当于取消自上次执行git add filename以来（如果执行过）的本地修改。
                                此时工作区filename文件会被改写。
    git checkout branch -- filename     维持HEAD的指向不变。
                                        用branch所指向的提交中filename替换暂存区和工作区中相应的文件。
                                        注意会将暂存区和工作区中的filename文件直接覆盖。
    git checkout -- .           这两条命令最危险！会取消所有本地的修改（相对于暂存区）。
    git checkout .              相当于用暂存区的所有文件直接覆盖本地文件，不给用户任何确认的机会！
    git checkout commit_id -- file_name     如果不加commit_id，那么git checkout -- file_name 表示恢复文件到本地版本库中最新的状态。
```
##### 7、忽略文件
在主目录下建立".gitignore"文件，此文件有如下规则：

- 忽略文件中的空行或以井号（#）开始的行将会被忽略。
- 可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。
- 如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。
- 如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。
- 如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。
- [更多忽略规则](https://www.cnblogs.com/kevingrace/p/5690241.html)
```
#为注释
*.txt #忽略所有 .txt结尾的文件
!lib.txt #但lib.txt除外
/temp #仅忽略项目根目录下的TODO文件,不包括其它目录temp
build/ #忽略build/目录下的所有文件
doc/*.txt #会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```
##### 8、提交
```
-   git commit -m [message]             提交暂存区到仓库区
    git commit [file1] [file2] ... -m [message]     提交暂存区的指定文件到仓库区
    git commit -a                       提交工作区自上次commit之后的变化，直接到仓库区，跳过了add,对新文件无效
    git commit -v                       提交时显示所有diff信息
    git commit --amend -m [message]     使用一次新的commit，替代上一次提交
                                        如果代码没有任何新变化，则用来改写上一次commit的提交信息
    git commit --amend [file1] [file2] ...          重做上一次commit，并包括指定文件的新变化
```
##### 9、日志与历史
```
-   git log             查看提交日志
    git log --graph     以图形化的方式显示提交历史的关系
    git log -1          显示一行
    git reflog          会记录这个仓库中所有的分支的所有更新记录，包括已经撤销的更新。
    git ls-files        查看指定状态的文件列表
    history             显示输入过的命令
```
##### 10、撤销更新
```
-   git reset HEAD <file>...        把暂存区的更新移出到WorkSpace中
    git reset --hard HEAD~n         撤销上n次的提交,同时还会将上n次提交的文件删除
    git revert <commit-id>          撤销提交.这条命令会把指定的提交的所有修改回滚，并同时生成一个新的提交。
```
##### 11、GIT分支
```
-   git branch                      列出所有本地分支
    git branch -r                   列出所有远程分支
    git branch -a                   列出所有本地分支和远程分支
    git branch [branch-name]        新建一个分支，但依然停留在当前分支
    git checkout -b [branch]        新建一个分支，并切换到该分支
    git branch [branch] [commit]    新建一个分支，指向指定commit
    git branch --track [branch] [remote-branch]             新建一个分支，与指定的远程分支建立追踪关系
    git checkout [branch-name]      切换到指定分支，并更新工作区
    git checkout -                  切换到上一个分支
    git branch --set-upstream [branch] [remote-branch]      建立追踪关系，在现有分支与指定的远程分支之间
    git merge [branch]              合并指定分支到当前分支
    git cherry-pick [commit]        选择一个commit，合并进当前分支
    git branch -d [branch-name]     删除分支
    git push origin --delete [branch-name]                  删除远程分支
    git branch -dr [remote/branch]                          删除远程分支
```
##### 12、远程仓库操作
```
-   git fetch [remote]                  下载远程仓库的所有变动
    git remote -v                       显示所有远程仓库
    git remote show [remote]            显示某个远程仓库的信息
    git remote add [branchname] [url]   增加一个新的远程仓库，并命名
    git pull [remote] [branch]          取回远程仓库的变化，并与本地分支合并
    git push [remote] [branch]          上传本地指定分支到远程仓库
    git push [remote] --force           强行推送当前分支到远程仓库，即使有冲突
    git push [remote] --all             推送所有分支到远程仓库
    git remote                          简单查看远程---所有仓库
    git remote show [remote-branch-name]    查看单个仓库
    git remote rename [oldname] [newname]   修改远程仓库
    git remote rm [remote-name]             删除远程仓库
```