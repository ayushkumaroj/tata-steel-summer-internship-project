export interface QueueTime {
  _id:string | null,
  siteId: string;
  maxQueueTime?: number | null;
  minQueueTime?: number | null;
  operation: string;
  tdc: string;
  grade?: string | null;
  steelSpec?: string | null;
  steelType?: string | null;
  scenarioId?: number | null;
  operationSeq?: number | null;
  sysTargetId?: number | null;
  sysAuthId?: string | null;
  sysSource?: string;
  sysCreatedBy?: string | null;
  sysCreationDate?: string;
  sysEntState?: string;
  sysLastModifiedBy?: string | null;
  sysLastModifiedDate?: string | null;
  sysNcType?: string | null;
  sysErrCode?: string | null;
  sysErrSvrty?: string | null;
  sysFilter?: string | null;
  sysExceptionType?: string | null;
  udProcessGrp?: string | null;
}

export interface Yield {
  _id:string | null,
  site: string;
  operation: string;
  operationSeq?: number | null;
  yield?: number | null;
  sysTargetId?: number | null;
  sysAuthId?: string | null;
  sysSource?: string;
  sysCreatedBy?: string | null;
  sysCreationDate?: string;
  sysEntState?: string;
  sysLastModifiedBy?: string | null;
  sysLastModifiedDate?: string | null;
  sysNcType?: string | null;
  sysErrCode?: string | null;
  sysErrSvrty?: string | null;
  sysFilter?: string | null;
  sysExceptionType?: string | null;
}

export interface StrikeRate {
  _id:string | null;
  grade: string;
  tdc: string;
  strikerate: number;
  operation: string;
  additionalStrikerate?: number | null;
  sec1Max?: number | null;
  sec1Min: number;
  sec2Max?: number | null;
  sec2Min: number;
  steelSpec?: string | null;
  steelType?: string | null;
  operationSeq?: number | null;
  sysTargetId?: number | null;
  sysAuthId?: string | null;
  sysSource?: string;
  sysCreatedBy?: string | null;
  sysCreationDate?: string;
  sysEntState?: string;
  sysLastModifiedBy?: string | null;
  sysLastModifiedDate?: string | null;
  sysNcType?: string | null;
  sysErrCode?: string | null;
  sysErrSvrty?: string | null;
  sysFilter?: string | null;
  sysExceptionType?: string | null;
}

export interface RunRate {
  _id:string | null;
  siteId: string;
  grade?: string | null;
  tdc: string;
  operation: string;
  qualityCode: string;
  steelGrade?: string | null;
  runrate: number;
  cooldownTime?: number | null;
  sec1Max: number;
  sec1Min: number;
  sec2Max: number;
  sec2Min: number;
  steelSpec?: string | null;
  steelType?: string | null;
  operationSeq?: number | null;
  sysTargetId?: number | null;
  sysAuthId?: string | null;
  sysSource?: string;
  sysCreatedBy?: string | null;
  sysCreationDate?: string;
  sysEntState?: string;
  sysLastModifiedBy?: string | null;
  sysLastModifiedDate?: string | null;
  sysNcType?: string | null;
  sysErrCode?: string | null;
  sysErrSvrty?: string | null;
  sysFilter?: string | null;
  sysExceptionType?: string | null;
}
