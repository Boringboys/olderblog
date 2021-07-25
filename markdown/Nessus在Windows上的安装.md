# Nessus在Windows上的安装

## Nessus
[Nessus][nessus] 是目前全世界最多人使用的系统漏洞扫描与分析软件。总共有超过75,000个机构使用Nessus 作为扫描该机构电脑系统的软件。
该工具提供完整的电脑漏洞扫描服务，并及时更新其漏洞数据库。
Nessus不同于传统的漏洞扫描工具，它可以同时在本机或远端上遥控，进行系统的漏洞分析扫描。

## 获取安装包
Nessus的下载地址:[https://www.tenable.com/downloads/nessus][download-link]  
点击此链接在浏览器打开如下所示的界面：

<img src="/images/img/Nessus_install/download_page.png" width="95%">

然后选择要下载的版本，这里我选择的是Nessus-8.3.1-x64.msi，即Windows版的安装包；

## 获取激活码
在使用Nessus之前，必须先激活服务才可以使用，激活服务的激活码可以在官网获取；

（1）首先在刚才的下载界面，可以看到一个“Get Activation Code”按钮，如下图所示，点击它即可前往获取激活码；

<img src="/images/img/Nessus_install/get_code.png" width="95%">

（2）然后会让你选择获取哪种激活码，如下图所示：  
- 一种是Professional版的，即专业版，需要付费获得激活码；  
- 另外一种是Home版的，即免费版；  
这里我选择了Home版，点击“Register Now”，前往注册界面；

<img src="/images/img/Nessus_install/chose_free.png" width="95%">

（3）在注册界面填写信息以及邮箱，然后点击“Register”按钮，如下图；

<img src="/images/img/Nessus_install/register.png" width="95%">

（4）当显示如下所示的“Thank You for Registing ...”页面时，说明你已经成功获得激活码，激活码以邮件形式发送到了你所填写的邮箱；

<img src="/images/img/Nessus_install/thanks_page.png" width="95%">

## 安装Nessus
（1）点击前面下载的xxx.msi安装包，安装Nessus；

<img src="/images/img/Nessus_install/install.png" width="95%">

按照安装导向成功安装Nessus后，会自动在浏览器打开一个如下图所示的页面，如果没有可以自己在浏览器输入“https://localhost:8834”打开；

<img src="/images/img/Nessus_install/create_account.png" width="95%">

如果输入链接后无法访问，可能是Nessus服务没有运行，前往Nessus的安装目录点击执行“nessus-service.exe”即可，如图双击“nessus-service.exe”启动Nessus服务，
双击“Nessus Web Client”可以打开网页版客户端，即“http:localhost:8834”；

<img src="/images/img/Nessus_install/nessus.png" width="95%">

（2）在打开的“Create an account”页面，输入用户名和密码创建一个账号，以后再次打开此页面使用Nessus时，需要使用这里设置的用户名和密码登录；  
（3）点击“Continue”后，会出现一个界面让你输入激活码，将前面获得的激活码输入然后继续；  
（4）然后就是如下图所示的初始化界面了，这一步会下载并安装一些插件，时间会有点久，但没有任何操作，等它完成就可以了；

<img src="/images/img/Nessus_install/nessus_initializing.png" width="95%">

（5）完成之后，显示下面的界面，表示安装成功，你可以创建自己的扫描任务并执行了。

<img src="/images/img/Nessus_install/success.png" width="95%">


[nessus]:https://baike.baidu.com/item/Nessus/10718713
[download-link]:https://www.tenable.com/downloads/nessus 

>作者：Boringboys  
>原文链接：https://www.boringboys.top/article/Nessus在Windows上的安装/  
>版权声明：本文采用[BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)协议授权，转载请遵守此协议