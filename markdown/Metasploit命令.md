# metasploit命令

## 概述
作为一个英语渣，为了自己后期的学习，我把metasploit的帮助菜单简单翻译了一下，
方便自己查看的同时也分享给大家。

...翻译中...

核心命令
=============

    命令          描述
    -------       -----------
    ?             帮助菜单
    banner        在命令行里显示一个好看的metasploit图案（一个很有趣的命令^0^）
    cd            更改当前工作目录
    color         启用或禁用颜色输出
    connect       连接到一个主机
    exit          退出msfconsole
    get           获得一个上下文特定变量的值
    getg          获得一个全局变量的值
    grep          从另一个命令的输出中查找符合条件的行
    help          帮助菜单
    history       显示历史命令
    load          加载框架插件
    quit          退出msfconsole（有提示Y/N）
    repeat        重复一个命令列表
    route         通过会话路由流量
    save          保存活动数据
    sessions      转储会话列表并显示有关会话的信息
    set           设置一个上下文特定变量的值
    setg          设置一个全局变量的值
    sleep         在指定的秒数内不执行任何操作
    spool         将控制台输出写入某个文件
    threads       查看和操纵后台线程
    unload        卸载框架插件
    unset         取消设置一个或多个上下文特定变量的值
    unsetg        取消设置一个或多个全局变量的值
    version       显示框架和控制台库版本号


Module Commands
===============

    Command       Description
    -------       -----------
    advanced      Displays advanced options for one or more modules
    back          Move back from the current context
    info          Displays information about one or more modules
    loadpath      Searches for and loads modules from a path
    options       Displays global options or for one or more modules
    popm          Pops the latest module off the stack and makes it active
    previous      Sets the previously loaded module as the current module
    pushm         Pushes the active or list of modules onto the module stack
    reload_all    Reloads all modules from all defined module paths
    search        Searches module names and descriptions
    show          Displays modules of a given type, or all modules
    use           Selects a module by name


Job Commands
============

    Command       Description
    -------       -----------
    handler       Start a payload handler as job
    jobs          Displays and manages jobs
    kill          Kill a job
    rename_job    Rename a job


Resource Script Commands
========================

    Command       Description
    -------       -----------
    makerc        Save commands entered since start to a file
    resource      Run the commands stored in a file


Database Backend Commands
=========================

    Command           Description
    -------           -----------
    analyze           Analyze database information about a specific address or address range
    db_connect        Connect to an existing data service
    db_disconnect     Disconnect from the current data service
    db_export         Export a file containing the contents of the database
    db_import         Import a scan result file (filetype will be auto-detected)
    db_nmap           Executes nmap and records the output automatically
    db_rebuild_cache  Rebuilds the database-stored module cache
    db_remove         Remove the saved data service entry
    db_save           Save the current data service connection as the default to reconnect on startup
    db_status         Show the current data service status
    hosts             List all hosts in the database
    loot              List all loot in the database
    notes             List all notes in the database
    services          List all services in the database
    vulns             List all vulnerabilities in the database
    workspace         Switch between database workspaces


Credentials Backend Commands
============================

    Command       Description
    -------       -----------
    creds         List all credentials in the database


Developer Commands
==================

    Command       Description
    -------       -----------
    edit          Edit the current module or a file with the preferred editor
    irb           Open an interactive Ruby shell in the current context
    log           Display framework.log paged to the end if possible
    pry           Open the Pry debugger on the current module or Framework
    reload_lib    Reload Ruby library files from specified paths


msfconsole
==========

`msfconsole` is the primary interface to Metasploit Framework. There is quite a
lot that needs go here, please be patient and keep an eye on this space!

Building ranges and lists
-------------------------

Many commands and options that take a list of things can use ranges to avoid
having to manually list each desired thing. All ranges are inclusive.

### Ranges of IDs

Commands that take a list of IDs can use ranges to help. Individual IDs must be
separated by a `,` (no space allowed) and ranges can be expressed with either
`-` or `..`.

### Ranges of IPs

There are several ways to specify ranges of IP addresses that can be mixed
together. The first way is a list of IPs separated by just a ` ` (ASCII space),
with an optional `,`. The next way is two complete IP addresses in the form of
`BEGINNING_ADDRESS-END_ADDRESS` like `127.0.1.44-127.0.2.33`. CIDR
specifications may also be used, however the whole address must be given to
Metasploit like `127.0.0.0/8` and not `127/8`, contrary to the RFC.
Additionally, a netmask can be used in conjunction with a domain name to
dynamically resolve which block to target. All these methods work for both IPv4
and IPv6 addresses. IPv4 addresses can also be specified with special octet
ranges from the [NMAP target
specification](https://nmap.org/book/man-target-specification.html)

### Examples

Terminate the first sessions:

    sessions -k 1

Stop some extra running jobs:

    jobs -k 2-6,7,8,11..15

Check a set of IP addresses:

    check 127.168.0.0/16, 127.0.0-2.1-4,15 127.0.0.255

Target a set of IPv6 hosts:

    set RHOSTS fe80::3990:0000/110, ::1-::f0f0

Target a block from a resolved domain name:

    set RHOSTS www.example.test/24
	
Framework: 5.0.16-dev-a5184d39dc6a3a8cf2b85538327b57706057e94c

Console  : 5.0.16-dev-a5184d39dc6a3a8cf2b85538327b57706057e94c

>作者：Boringboys  
>原文链接：https://www.boringboys.top/article/Metasploit命令/  
>版权声明：本文采用[BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)协议授权，转载请遵守此协议
