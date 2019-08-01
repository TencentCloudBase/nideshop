### NideShop商城（服务端）

+ 界面高仿网易严选商城(主要是2016年wap版)
+ 测试数据采集自网易严选商城
+ 功能和数据库参考ecshop
+ 服务端api基于Ｎode.js+ThinkJS+MySQL
+ 计划添加基于Vue.js的后台管理系统、PC版、Ｗap版

本项目需要配合微信小程序端使用，GitHub: [https://github.com/tumobi/nideshop-mini-program](https://github.com/tumobi/nideshop-mini-program)


### 本地开发环境配置
+ 克隆项目到本地
```
git clone https://github.com/tumobi/nideshop
```
+ 默认使用了 sqlite3 数据库，无需进行数据库配置。

+ 填写微信登录和微信支付配置
src/common/config/config.js
```
// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: '', // 小程序 appid
    secret: '', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  }
};
```

+ 安装依赖并启动
```
npm install
npm start
```
访问http://127.0.0.1:8360/

### 线上部署

#### 在小程序云服务器上部署
推荐选用[腾讯云 · 小程序云服务器（PAI实例）](https://cloud.tencent.com/solution/pai)部署服务，PAI 实例默认域名，5分钟快速搭建基于WebSocket的实时高效通讯服务，同时提供云开发调用支持，为小程序开发提供更加便捷的云服务器解决方案。

购买实例后将获得默认提供的三级子域名，并自动配置了解析与ssl证书，访问 `xxx.pai.tcloudbase.com:5523/deploy` 填入git仓库地址即可一键部署服务到服务器，并可以实现简单的服务管控。
![在小程序云服务器上部署](https://main.qcloudimg.com/raw/24966332c887b7b8f3c4db3f77fc8747.png)


### 微信小程序客户端截图

![首页](http://upload-images.jianshu.io/upload_images/3985656-c543b937ac6e79bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![专题](http://upload-images.jianshu.io/upload_images/3985656-bd606aac3b5491c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![分类](http://upload-images.jianshu.io/upload_images/3985656-fa9565158376d439.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![商品列表](http://upload-images.jianshu.io/upload_images/3985656-788b7fd2c4a558d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![商品详情](http://upload-images.jianshu.io/upload_images/3985656-99a6e0a57778d85f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![购物车](http://upload-images.jianshu.io/upload_images/3985656-60ff2307d81f6bb2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![订单中心](http://upload-images.jianshu.io/upload_images/3985656-dff837e6b2ec87b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)


### 功能列表
+ 首页
+ 分类首页、分类商品、新品首发、人气推荐商品页面
+ 商品详情页面，包含加入购物车、收藏商品、商品评论功能
+ 搜索功能
+ 专题功能
+ 品牌功能
+ 完整的购物流程，商品的加入、编辑、删除、批量选择，收货地址的选择，下单支付
+ 会员中心（订单、收藏、足迹、收货地址、意见反馈）
....

### 交流
喜欢别忘了 Star，有问题可通过微信、公众号、QQ 群联系我，谢谢您的关注。

![联系方式](http://nideshop-static.nideshop.com/nideshop-qrcode.png)
