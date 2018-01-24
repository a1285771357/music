#  music
My Bibased App
##  技术(使用git对项目进行管理）
###  前端
1.  使用react、ant-design、echarts进行页面布局
2.  使用webpack进行前端代码压缩混淆
3.  报文加密
###  后端
1.  使用node
2.  报文加密md5
3.  数据库加密
###  数据库
1.  使用mongodb
2.  数据库加密
##  需求
###    <!--
                                                               .
                                         .;$$
                            ....:;$$$$$$$   $
                        ..;;;$$$            $:..
                     .:$$$$$$               $$$$$:.
                   .;$$$$$$$3             $$$$$$$$$;.
                 .;$$$$$$$$$$      $$$$$$$;$$$$$$$$$$;.
                ;$$$$$$$$$$$$$    $$;$$$$$$$$$$$$$$$$$$;
               ;$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$$$$$$$$$
              $$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$$$$$$$$$
             :$$$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$$$$$$$$;
            .$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$$$$$$$$$$$$$$$.
            :$$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$$$$$$$$$$$$$$:
            ;$$$$$$$$$$$$$$$$$$$$$$$$$$  $$$$$$$$$$$$$$$$$$;
            ;$$$$$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$$$$$$$$$$$;
            :$$$$$$$$$$$$$$$$$$             $$$$$$$$$$$$$$$:
            .$$$$$$$$$$$$$$$                 $$$$$$$$$$$$$$.
             ;$$$$$$$$$$$$$                   $$$$$$$$$$$$;
              $$$$$$$$$$$$                     $$$$$$$$$$$
               $$$$$$$$$$                      $$$$$$$$$$
                ;$$$$$$$$                     $$$$$$$$$;
                 .$$$$$$$$                   $$$$$$$$$.
                   .$$$$$$$$               $$$$$$$$$:
                     .;$$$$$$$$          $$$$$$$$;.
                        .:$$$$$$$$$$$$$$$$$$$$:.
                            ...:;;;;;;;;:...

    -->
###  功能实现：我的音乐、音乐馆、音乐圈（社交功能）、个人主页

####  我的音乐
1.  未登录状态点击进入登录页面
#####  通过社交账号登录
#####  通过验证码
#####  通过密码
#####  没有账号注册（验证码）
2.  已登录状态
#####  歌单管理
1.  自建建歌单列表、收藏歌单列表
2.  对歌单增删，删除恢复，修改名字，封面，介绍，标签，
3.  可以对歌单内音乐列表管理（删除单曲，下载单曲，切换收藏位置，下载，评论，分享，可调整播放顺序）
4.  设置歌单状态，是否对他人显示
#####  最近播放
1.  展示最近播放100条记录（10天）按时间顺序
#####  本地音乐
1.  分为单曲、MV
2.  列表展示方式单曲、歌手、专辑
3.  可以搜索本地音乐
4.  列表管理，排序方式（时间，名称），删除本地
#####  下载音乐
1.  正在下载列表，显示下载速度
2.  已经下载列表，可对其进行删除操作
#####  ~~已购音乐（待定）~~
#####  头像
1.  展示头像，点击跳转个人主页
2.  展示是否为VIP

####  个人主页
1.  展示常听音乐类型（歌手、年代、语种）
2.  展示好友，关注，粉丝数量（如没有自动推荐）
3.  分享个人主页
4.  个人资料（支持编辑）
5.  展示消息提示
~~后期希望可以实现个人主页模板自定义~~

####  设置
1.  在线播放音质
2.  下载音质
3.  是否使用4G播放
4.  是否使用4G下载
5.  账号绑定（微博微信QQ）
6.  接收消息通知
7.  截屏后提示分享
8.  锁屏歌词
9.  换肤
10.  关于我们
11.  定时关闭
12.  退出登录

####  音乐馆
1.  新歌推荐banner
2.  每日推荐、歌单、排行榜
3.  单曲推荐列表
4.  mv推荐
5.  音乐人推荐
6.  搜索网络音乐

####  音乐圈
1.  可以搜索用户
2.  添加关注，发送私信
3.  展示其个人主页，歌单，资料，动态
4.  可以发送动态
5.  动态可点赞可转发可评论

####  总体：有一个搜索，有听歌识曲，有点击进去播放页入口