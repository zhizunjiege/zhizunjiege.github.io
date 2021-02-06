---
title: Kirikiroid2使用指南
categories: 世间好物
tags: 
  - 软件
  - 模拟器
  - Galgame
  - 教程
keywords: 'kirikiroid2,永不枯萎的世界与终焉之花,枯れない世界と終わる花'
abbrlink: 43f77427
---

&emsp;&emsp;Kirikiroid2是一款模拟器，能在移动端直接运行基于Kirikiri2和KirikiriZ引擎开发的游戏。  
&emsp;&emsp;我曾尝试着寻找这个软件的使用教程，希望能在手机上游玩「枯れない世界と終わる花」这款游戏，但在很多帖子里只得到相对模糊的介绍，而楼主们仿佛不屑于介绍地更为详细。直到我发现这篇[日文教程][1]，作者是赤西真論，原文有上万字，配图几十张，可以说是我见过最为详细的教程。本想对其进行翻译，但无奈原文实在太长，只好作一定删减，并以自己的角度来写作这一篇指南，希望对你有所帮助。    

<!-- more -->

## **注意**
&emsp;&emsp;阅读指南前请先确认你想玩的游戏确实是使用Kirikiri2或KirikiriZ开发的，特点是游戏文件夹内有以xp3为后缀的文件。由于缺乏设备，本文所有步骤只在安卓系统上测试通过，IOS系统的步骤类似，请对照着进行，或者直接访问上面提到的赤西真論的教程。（你懂日文的话）


## 安装软件

&emsp;&emsp;可以去Kirikiroid2的[github仓库][2]页面下载最新版的安装包，但网速一般很慢，结合这个[github下载加速网站][3]速度稍微快点，使用方法一看就懂。或者从我分享的[蓝奏云链接][4]来下载，密码：87pb。当然，你也可以去Google Play付费购买，安卓系统的叫Kirikiroid2，IOS的叫Xp3player。   
&emsp;&emsp;推荐蓝奏云下载，速度很快。

---


## 准备补丁

&emsp;&emsp;由于游戏文件进行了一定加密，很多游戏如果没有补丁就无法运行，当然也有些游戏无需补丁就可以启动，但我还是建议去以下网站搜索一下有没有对应的补丁  
 
> 1. [Patch List(GitHub.io)][5]  
> 2. [AVGFun][6]  

&emsp;&emsp;以第一个网站为例，搜索「枯れない世界と終わる花」  
![图片1][7]  
&emsp;&emsp;点击左边的GET即可下载补丁。  
&emsp;&emsp;如果找到了对应的补丁，下载下来并解压。没找到的话也可以尝试接下来的步骤，但有一定概率失败。补丁一般包含一个xp3filter.tjs文件，此外还**可能**有一个krz_xp3conv.exe可执行文件。

---


## 下载游戏

&emsp;&emsp;找到你想要玩的游戏并下载，将之前下载好的补丁里的文件全部放到游戏文件夹下，以「枯れない世界と終わる花」为例，其文件夹结构如下图所示  
![图片2][8]  
&emsp;&emsp;不同的游戏可能有不同的结构，但一般有xp3文件和plugin文件夹里的dll文件。如果之前的补丁里有krz_xp3conv.exe，双击运行它，等到控制台出现“按任意键继续……”的文字时，表示文件解密成功；没有该exe文件则直接进入下一步。  

---


## 运行游戏

&emsp;&emsp;将整个游戏文件夹复制到手机内存中，打开Kirikiroid2，利用软件内的文件管理器找到游戏文件夹，点击文件夹下的data.xp3。初次运行时会出现一个操作介绍页面，点击右上角的“X”关闭即可，等待一会儿，脚本执行完毕，游戏就可以成功运行。  
![图片3][9]  

---


## 后记

> &emsp;&emsp;赤西真論曾在他的教程最后说到，他在尝试运行「枯れない世界と終わる花」这款游戏时遭到了挫败，解密文件的时候出错，所以他选择了放弃，而我特意选择了这款游戏来做我的例子2333。我曾给他留言问询是否可以将他的教程翻译为中文，但最终也未能收到回复，现在都一年多了。

---

[1]: https://www.marron.work/2017/03/95/ "(完全版？)Kirikiroid2とXP3Playerの使い方"
[2]: https://github.com/zeas2/Kirikiroid2/releases "下载"
[3]: https://shrill-pond-3e81.hunsh.workers.dev/ "文件下载加速"
[4]: https://wws.lanzous.com/b01hgaaaf "密码：87pb"
[5]: https://zeas2.github.io/Kirikiroid2_patch/patch/ "Kirikiroid2项目作者个人博客"
[6]: http://avgfun.net/viewforum.php?f=4&sid=c0406ca29618c05c53c262823d3a115e "未验证"
[7]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/kirikiroid2/1.png
[8]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/kirikiroid2/2.png
[9]: https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/post/kirikiroid2/3.png