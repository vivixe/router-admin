# 万华软件公司后台管理系统设计书

## 1. 页面结构

### 	1. 用户登录、注册界面

###### 		功能实现

​		展示标题，操作员的登录、注册新操作员、记住密码

###### 		界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-35-05.png)

### 	2. 数据总览界面 

###### 功能实现

展示大部分数据，以图表的形式展示，右侧展示管理员信息。

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-35-42.png)

### 	3. 职员一览界面

###### 功能实现

展示员工的图表信息，可以看到各个部门的人数占比，性别占比，活跃度等等

###### 界面展示

#### 3.1 职员列表界面

###### 功能实现

列表形式展示所有职员的信息，可以进行条件的查询。

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-35-55.png)

#### 3.2 部门列表界面

###### 功能实现

列表形式展示所有部门，显示每个部门带有的人数，（待开发）

#### 3.3 部门详情界面

###### 功能实现

详细展示这个部门的信息，包括这个部门所有的成员，创建者，部门的作用，（待开发）

#### 3.4 职员详情界面

###### 功能实现

详细展示这个职员的信息，头像，姓名，年龄，职位，住址，所属部门，入职时长，活跃度等等，可以执行更换职位，更换部门等等操作（待开发）

### 	4. 项目一览界面

###### 功能实现

展示最近几个正在开发的项目，以卡片、列表、描述等形式展示内容。

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-36-08.png)

#### 4.1 项目列表界面

###### 功能实现

具体展示所有项目，以卡片的形式，支持条件搜索和模糊搜索。

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-36-18.png)

#### 4.2 项目发布界面

###### 			实现功能

​			输入项目的名字、选择项目的负责人（职位为admin），选择项目的小组成员，开始时间，项目预规划图，预订报酬，甲方要求等等

​			展示最近已发布进行中的项目，

​			展示已完成的项目收益，用卡片

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-52-53.png)

#### 4.3 项目详情界面

###### 实现功能

由项目列表点击某个项目进入，展示当前项目的基本信息，以及所关联的开发成员，项目本身的版本信息（待开发），进度信息（待开发），相关公告（待开发）。

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-52-18.png)

### 	5. 信息管理 

#### 		5.1 公告管理

###### 功能实现

可以查看所有管理员发布的公告，展示公告标题、简介、内容、由谁发布、发布时间和发布的位置。支持条件搜索和模糊搜索。

###### 界面展示

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-53-04.png)

#### 5.2 发布公告

###### 功能实现

填写公告信息的表单页面，填写分为三个步骤：

​	填写标题，简介，发布位置，时间

​	填写公告正文

​	发布结果

发布成功后可以跳转列表页或者重新填写

###### 界面展示

第一步

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-54-42.png)

第二步

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-54-47.png)

第三步（结果页）

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-54-55.png)

#### 		5.3 待办提醒

### 	6. 个人中心界面

###### 实现功能

左侧展示管理员全部的个人信息，附带编辑资料的跳转按钮和退出登录的注销按钮。

右侧展示该管理员发布的公告，负责的项目。

###### 界面展示

右侧公告页

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-55-08.png)

右侧项目页

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-55-22.png)

#### 6.1 个人设置界面

###### 实现功能

管理员个人资料的编辑页面，分为三部分：

​	基本设置：可以更改管理员自身的信息，包括头像的修改。

​	安全设置：可以更改密码，绑定的手机和邮箱。

​	账号绑定：（待开发）

###### 界面展示

基本设置页面

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-55-27.png)

安全设置页面

![](https://xwh-wsp.oss-cn-hangzhou.aliyuncs.com/wsp%28vivixe%29/program/Snipaste_2023-01-30_14-55-32.png)

##### 			

## 
