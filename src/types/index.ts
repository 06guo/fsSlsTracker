/**
 * @interface 阿里云日志初始化参数
 */
export interface IXlsxInfo {
  host: string // 所在地域的服务入口。例如cn-hangzhou.log.aliyuncs.com
  project: string // Project名称。
  logstore: string // Logstore名称。
  time: number // 发送日志的时间间隔，默认是10秒。
  count: number // 发送日志的数量大小，默认是10条。
}
/**
 * @interface 统计公共参数
 */
export interface IXlsxCommonParam {
  [propName: string]: any
}
