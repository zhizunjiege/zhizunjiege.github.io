---
title: 用于mingw-w64的opencv4编译指南及资源
categories: 技术
tags: 软件
keywords: 'mingw,mingw-w64,opencv,编译'
abbrlink: 843d387b
---

&emsp;&emsp;当我开始学习opencv的时候，发现官方只提供了用于vc、android和ios的库文件，而我所用的c++开发环境是VS Code编辑器与mingw-w64编译器，缺少库文件使我很为难，所以最终决定通过源代码自行编译。经过将近三个小时，我成功了。事后总结，我发现编译源代码其实并不难，难在自己初次尝试时保持足够的耐心去解决一些奇奇怪怪的bug。第一次总是很辛苦，所以我写作这篇教程，希望能帮你少走弯路。   

<!-- more -->

## 编译准备

&emsp;&emsp;本次编译的环境是windows10，需要下载一些辅助资源：首先是opencv源码，此次使用的是目前最新版本4.4.0；然后是mingw-w64编译器；其次需要使用cmake的GUI程序来帮助我们生成编译所需的配置文件。这些资源我都会尽量上传到蓝奏云，可以统一从我在文末给出的[资源链接](#4-资源链接)中找到，但如果想要其他版本可以分别去下文中给出的对应地址下载。  

### opencv4.4.0源码

&emsp;&emsp;源码可以在opencv的[github仓库][1]下载，嫌速度慢可以配合我[上篇文章][2]提到的github下载加速网站。理论上来说最近的几个版本都可以编译，不过还是建议选最新的版本。下载后将源码解压，并在源代码文件夹外新建一个build文件夹用来存放编译过程中产生的中间文件。

### mingw-w64编译器

&emsp;&emsp;[mingw-w64][3]与[mingw][4]是不一样的，详情可以查看各自的官网。我们需要下载**posix版本**的mingw-w64，因为opencv使用的是符合posix规范的多线程api。在SOURCEFORGE的[opencv下载页面][5]，找到如下区域：  

![第一步][6]  

![第二步][7]  

&emsp;&emsp;下载x86_64-posix-seh后解压即可，并将该解压后目录下的bin文件夹添加到系统环境变量。  

### cmake程序  

&emsp;&emsp;cmake可以去[官网下载][8]，找到符合自己设备配置的安装程序下载后安装即可，安装时最好勾选“添加桌面图标”。

---

## 编译安装

### 编译

&emsp;&emsp;打开cmake GUI程序，分别点击“Browse Source...”和“Browse Build...”选择好之前解压的源代码文件夹和新建的build文件夹，如下图所示：  

![选择源代码][9]

&emsp;&emsp;点击“Configure”，在“Specify the generator for this project”中选择“MinGW Makefiles”，下方的单选框选择“Specify native compilers”,如下图所示：  

![选择makefile配置][10]

&emsp;&emsp;点击“Next”，选择c和c++编译器，分别是你安装mingw-w64的目录下的bin文件夹中的gcc.exe和g++.exe，如下图所示：  

![选择编译器][11]

&emsp;&emsp;点击“Finish”，等待一段时间（请保持耐心），直到配置完成，如下图所示：  

![配置完成][12]  

> #### **注意**
> &emsp;&emsp;如果配置失败，并且具有“opencv_ffmpeg.dll下载失败”之类的报错信息，请将[资源链接](#4-资源链接)中下载的ffmpeg文件夹中内容复制到源代码目录下.cache/ffmpeg文件夹中，如下图所示：  
> 
> ![ffmpeg][13]  
> 

&emsp;&emsp;配置成功后，可以看到cmake界面上出现很多配置项。这些配置可以按需修改，前提是你得理解这些配置代表什么含义。我只能模糊地理解其中一部分，在此就不解释了。下面是我所用的配置，追求编译速度尽量快而且功能够用即可。想修改的话请自行查阅其他资料，一个原则是：对不确定的配置项不做改动，沿用默认值即可。  

&emsp;&emsp;需要取消勾选的项是： 

> 1. BUILD_JAVA
> 2. BUILD_PERF_TESTS
> 3. BUILD_TESTS

&emsp;&emsp;需要勾选的项是：

> 1. BUILD_opencv_world
> 2. WITH_OPENGL

&emsp;&emsp;配置完后再次点击“Configure”，直到页面由红变白，然后点击“Generate”。  

&emsp;&emsp;来到build文件夹下，在此处打开cmd或powershell窗口，执行命令  

```shell
mingw32-make -j 8
```

&emsp;&emsp;其中 `-j` 是控制编译所用线程数的参数，这可以根据电脑性能来决定，电脑不好的话可以改成4线程。等待编译完成，这需要花费一定时间。

> #### **注意**
> &emsp;&emsp;如果编译失败，且报错信息如下图所示，则手动执行命令  
> 
> ```shell
> cd modules/world
> windres vs_version.rc -O coff CMakeFiles\opencv_world.dir\vs_version.rc.obj
> mingw32-make -j 8
> ```
> 
> &emsp;&emsp;结果见下图：  
> 
>   ![编译报错][14]   
> 

### 安装

&emsp;&emsp;编译完成后，在控制台窗口继续执行  

```shell
mingw32-make install
```

&emsp;&emsp;等待安装完成。在这次安装过程中，我发现少安装了几个文件，需要手动复制过去。这些文件如下：

> 1. opencv4.4.0/include/opencv2/opencv2.hpp
> 2. build/opencv2/cvconfig.h
> 3. build/opencv2/opencv_modules.hpp

&emsp;&emsp;将这些文件全部复制到 `build/install/include/opencv2` 文件夹下即可，install文件夹下就是我们需要的所有文件。值得一提的是，我以前编译opencv4.2.0源码时没有出现过这个问题，我只能猜想是新版本的安装脚本发生了某些变动，也或者是我的配置有误，你要有空，可以试试不改配置直接生成makefile并编译。我会将opencv4.2.0编译后的库文件也上传到蓝奏云中，两个版本随你选择。

---

## 测试程序

&emsp;&emsp;为了调试方便，首先将 install 文件夹下的 x64/mingw/bin 文件夹添加到系统环境变量，例如我电脑上的路径为：   

> H:\Code\c++\opencv\build\install\x64\mingw\bin

&emsp;&emsp;打开VS Code，配置好.vscode文件夹下的三个文件：  

> 1. c_cpp_properties.json  
> 2. launch.json  
> 3. tasks.json  

&emsp;&emsp;写一段示例程序并找一张图片用来测试，执行 Ctrl+Shift+B 编译程序，再执行 Ctrl+Shift+T 运行程序，如果没有错误，你将看到图片显示在窗口中。

![测试成功][15]

---

## 资源链接

&emsp;&emsp;本次资源包含以下文件：  

> 1. opencv4.4.0 源代码
> 2. mingw-w64 编译器
> 3. cmake 程序（蓝奏云不支持msi格式，所以进行了压缩，需要解压）
> 4. 第三方库 ffmpeg 文件（cmake配置报错时使用）
> 5. opencv4.4.0 与 opencv4.2.0 编译完成后的库文件（懒人福音^_^）
> 6. vscode用于c++的3个配置文件（需按自己实际情况进行改动）
> 7. 测试程序源文件
> 8. 一个自主编写的makefile文件，用于opencv学习过程中小项目的编译~

&emsp;&emsp;[资源链接][16]在这里，密码是3pi9。

---

## 参考资料

> 1. [Windows10下Opencv4+CMake+MinGW64+VSC安装教程][17]
> 2. [OpenCV Tutorials : Introduction to OpenCV : Installation in Windows][18]
> 3. [CMake编译opencv各选项的含义][19]
> 3. [提升OpenCV编译速度的方法][20]

---

## 后记

> &emsp;&emsp;此次编译最大的问题是安装4.4.0库文件时缺少了几个文件，我依稀记得编译4.2.0时好像没出这种幺蛾子，于是用相同的配置把4.2.0也编译了一遍，结果证明不是我的操作与配置问题ヽ(✿ﾟ▽ﾟ)ノ  
> &emsp;&emsp;写作这篇文章时，我力求清晰与详尽，所以可能显得有点啰嗦，还请见谅！

---

[1]: https://github.com/opencv/opencv "opencv的github仓库"
[2]: https://zhizunjiege.github.io/2020/06/20/Kirikiroid2%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/ "Kirikiroid2使用指南"
[3]: http://mingw-w64.org/doku.php "mingw-w64官网"
[4]: http://mingw.org/ "mingw官网" 
[5]: https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/ "mingw-w64下载链接"
[6]: https://img-blog.csdnimg.cn/20191231184323866.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppcWlyZW5fZGFzaGVuZw==,size_16,color_FFFFFF,t_70 "第一步"
[7]: https://img-blog.csdnimg.cn/20191231184353673.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppcWlyZW5fZGFzaGVuZw==,size_16,color_FFFFFF,t_70 "第二步"
[8]: https://cmake.org/download/ "cmake官网下载链接"
[9]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/opencv4/选择源代码.png "选择源代码"
[10]: https://img2020.cnblogs.com/blog/772331/202005/772331-20200520002613565-1182638410.png "选择makefile配置"
[11]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/opencv4/选择编译器.png "选择编译器"
[12]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/opencv4/配置完成.png "配置完成"
[13]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/opencv4/ffmpeg.png "ffmpeg"
[14]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/opencv4/编译报错.png "编译报错" 
[15]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/opencv4/测试成功.png "测试成功" 
[16]: https://www.lanzoui.com/b01ho83wb "密码：3pi9"
[17]: https://www.cnblogs.com/uestc-mm/p/12758110.html
[18]: https://docs.opencv.org/4.4.0/d3/d52/tutorial_windows_install.html
[19]: https://blog.csdn.net/sz76211822/article/details/82428295
[20]: https://blog.csdn.net/tfb760/article/details/104030841