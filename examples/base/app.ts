import FsSlsTracker from '../../src/index'
// import FsLogger from 'fshows-logger'

const OPTS = {
  host: '', // 所在地域的服务入口。例如cn-hangzhou.log.aliyuncs.com
  project: '', // Project名称。
  logstore: '', // Logstore名称。
  time: 10, // 发送日志的时间间隔，默认是10秒。
  count: 10 // 发送日志的数量大小，默认是10条。
}
let param = {
  userName: '测试',
  userId: '123456',
  userAgent: '测试数据'
}
const xlsxLog = new FsSlsTracker(OPTS, param)
console.log(xlsxLog, 'xlsxLog=====')
const btnEl = document.getElementById('btn')

btnEl!.addEventListener('click', e => {
  xlsxLog.trackerClick('npm包测试', 'test_log')
})

