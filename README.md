# FsSlsTracker 阿里云日志统计工具

## 使用

### 安装

```bash
npm install fs-sls-tracker --save
```

### demo

```javascript
import FsSlsTracker from 'fs-sls-tracker'
// 固定阿里云日志参数
const OPTS = {
  host: '', // 所在地域的服务入口。例如cn-hangzhou.log.aliyuncs.com
  project: '', // Project名称。
  logstore: '', // Logstore名称。
  time: 10, // 发送日志的时间间隔，默认是10秒。
  count: 10 // 发送日志的数量大小，默认是10条。
}
// 日志统计公共参数
let param = {
  userName: '',
  userId: '',
  userAgent: ''
}
const slsTracker= new FsSlsTracker(OPTS, param)
// 测试事件点击
slsTracker.trackerClick('npm包测试', 'test_log')
// 测试打开新页面
slsTracker.trackerOpenPage('npm包测试打开新页面', 'test_open_page')
// 测试event
slsTracker.trackerEvent('npm包测试evet', 'test_event')
```

## 配置项

- 阿里云日志基础字段
  - host， 所在地域的服务入口。例如cn-hangzhou.log.aliyuncs.com
  - project，Project名称
  - logstore	Logstore名称。
  - time	发送日志的时间间隔，默认是10秒。
  - count 发送日志的数量大小，默认是10条。
- 公共参数，传到阿里云的公共参数，例如userName，userId等，

- 三个统计事件参数

|  参数名称  | 类型 | 是否必填  |  描述  |  默认值 |
|  ---- | ---- | ----  | ----  | ---- |
| category  | string| 必填 | 类别， 页面名称标识或功能标识（统一中文命名）  | |
| seed  | string | 必填 |  埋点Id，埋点的英文ID，由需求提交者定义，例如 运营广告位-点击 promotion_ops_click | |
| ext4  | string | 选填 |  其他json字符串字段  |  |

## 方法

