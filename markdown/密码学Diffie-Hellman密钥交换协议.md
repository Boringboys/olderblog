# 密码学--Diffie-Hellman密钥交换协议

## 概念
**Diffie-Hellman密钥交换协议**（Diffie-Hellman key exchange agreement）简称“D-H**协议**”，是1976年 Whitfield Diffie 和 Martin Hellman 合作发明的安全协议，它可以让双方在完全没有对方任何预先信息的条件下通过不安全信道创建起一个密钥。这个密钥可以在后续的通信中作为对称密钥来加密通信内容。

## 算法描述
（1）通信双方 Alice 和 Bob 先确定*两个大素数* p 和 q ，这两个数不需要保密，因此通信双方可以通过不安全信道协商并确定这两个数；

（2）Alice 选择一个大的*随机数* `r1` 并计算：`A=q^r1 (mod p)`；

（3）Alice 将 `A` 发送给 Bob；

（4）Bob 选择另外一个大的*随机数* `r2` 并计算：`B=q^r2 (mod p)`；

（5）Bob 将 `B` 发送给 Alice；

（6）Alice 计算密钥：`k1=B^r1 (mod p)`；

（7）Bob 计算密钥：`k2=A^r2 (mod p)`

ps:最后，Alice 和 Bob 计算得到的 `k1=k2`，即得到的密钥

## 举例
（1）假设 Alice 和 Bob 选取的 `p=11 ， q=5`；

（2）Alice 选择的随机数取 `r1=3`，则 `A=5^3 (mod 11)=4`；

（3）Alice 将 `A=4` 发送给 Bob；

（4）Bob 选择的随机数取 `r2=6`，则 `B=5^6 (mod 11)=5`；

（5）Bob 将 `B=5` 发送给 Alice；

（6）Alice 计算：`k1=5^3 (mod 11)=4`；

（7）Bob 计算：`k2=4^6 (mod 11)=4`；

（8）交换得到的密钥：`k1=k2=4`

## 安全性
*D-H协议的安全性在于，在有限域中计算离散对数远远难于在同一个域中计算指数。*

从上面给出的例子解释，就是当 Alice 知道 r1=3，以及 p 和 q 的情况下可以十分容易的计算得到 A；  
而第三方在只知道 p，q 和 A 的情况下却很难计算得到 Alice 取得随机数 r1，所以无法使用 Bob 通过公共信道发送的 B 计算得到密钥 k；  
对于 Bob 取的随机数 r2，与对 Alice 的分析一样，第三方同样难以通过计算得到，也就难以通过 Alice 发送的 A 计算出密钥。

## 缺陷
D-H协议也存在缺陷，即容易受到**中间人攻击** ( **Man-in-the-Middle Attack** ，简称 **“MITM攻击”** ) ，就是通过拦截正常的网络通信数据，并进行数据篡改和嗅探，而通信双方却毫不知情。

中间人攻击的过程如下：

（1）第一步和上面所说的一样，通信双方 Alice 和 Bob 先确定两个大素数 `p` 和 `q` ，这两个数不需要保密，因此通信双方可以通过不安全信道协商并确定这两个数；  
设 `p=11 ，q=5`；

（2）窥探者 Eve 监听他们两个的会话，并得到了 `p` 和 `q` 的值；

（3）Alice、Bob、Eve 同时选择随机数：  
设 Alice 选择的还是 `r1=3` ，Bob 选择的是 `r2=6`，Eve 选择两个随机数 `r1'=8，r2'=9`；

（4）Alice、Bob、Eve 分别计算 `q^r (mod p)`：
Alice 计算得 `A=4` ，Bob 计算得 `B=5` ，Eve 计算得 `A'=13,B'=12`

（5）然后按照协议 Alice 将自己计算的 `A` 发送给 Bob，此时 Eve 截获这个 `A`，并将自己计算得到的 `A'` 发送给 Bob，Bob 对此过程并不知情；

（6）同样 Eve 也截获了 Bob 发送给 Alice 的 `B`，并将 `B'` 发送给 Alice，Alice 同样对此过程毫不知情；

（7）此时 Eve 可以根据截获的 `A` 、`B` 分别计算出 *自己和 Alice 通信的密钥* 以及 *自己和Bob通信的密钥*，分别与 Alice 、Bob 共享不同的密钥。

这样一来，Eve 就可以分别与 Alice 和 Bob 通信，而 Alice 和 Bob 仍认为和自己通信的是对方，对第三方并不知情。

>作者：Boringboys  
>原文链接：https://www.boringboys.top/generic.html?article=密码学Diffie-Hellman密钥交换协议  
>版权声明：本文采用[BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)协议授权，转载请遵守此协议