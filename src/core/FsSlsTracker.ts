import { IXlsxInfo, IXlsxCommonParam } from '../types'
import { TRACKER_TYPE } from '../helpers/config'
import { inWx, inMy } from '../helpers/env'

export default class FsXlsxLog {
  comParam: IXlsxCommonParam | undefined
  stacker: any
  constructor(initConfig: IXlsxInfo, commonParam?: IXlsxCommonParam) {
    console.log(inWx, '===inWx', inMy)
    if (inWx || inMy) {
      // 小程序
      const MiniTracker = require('@aliyun-sls/web-track-mini')
      this.stacker = new MiniTracker.default(initConfig)
    } else {
      // web
      const WebTracker = require('@aliyun-sls/web-track-browser')
      this.stacker = new WebTracker.default(initConfig)
    }
    this.comParam = commonParam
  }
  trackerClick(category: string, seed: string, ext4?: string): void {
    this.stacker.send({
      content: {
        ...this.comParam,
        category,
        seed,
        ext4,
        behavior: TRACKER_TYPE.CLICK
      }
    })
  }
  trackerOpenPage(category: string, seed: string, ext4?: string): void {
    this.stacker.send({
      content: {
        ...this.comParam,
        category,
        seed,
        ext4,
        behavior: TRACKER_TYPE.OPEN_PAGE
      }
    })
  }
  trackerEvent(category: string, seed: string, ext4?: string): void {
    this.stacker.send({
      content: {
        ...this.comParam,
        category,
        seed,
        ext4,
        behavior: TRACKER_TYPE.EVENT
      }
    })
  }
}
