import mongoose from "mongoose";


const QueueTimeSchema = new mongoose.Schema({
    siteId: { type: String, required: true, trim: true },
    maxQueueTime: { type: Number, default: null },
    minQueueTime: { type: Number, default: null },
    operation: { type: String, required: true, trim: true },
    tdc: { type: String, required: true, trim: true },
    grade: { type: String, default: null, trim: true },
    steelSpec: { type: String, default: null, trim: true },
    steelType: { type: String, default: null, trim: true },
    scenarioId: { type: Number, default: null },
    operationSeq: { type: Number, default: null },
    sysTargetId: { type: Number, default: null },
    sysAuthId: { type: String, default: null, trim: true },
    sysSource: { type: String, default: 'BackEnd', trim: true },
    sysCreatedBy: { type: String, default: null, trim: true },
    sysCreationDate: { type: Date, default: Date.now },
    sysEntState: { type: String, default: 'ACTIVE', trim: true },
    sysLastModifiedBy: { type: String, default: null, trim: true },
    sysLastModifiedDate: { type: Date, default: null },
    sysNcType: { type: String, default: null, trim: true },
    sysErrCode: { type: String, default: null, trim: true },
    sysErrSvrty: { type: String, default: null, trim: true },
    sysFilter: { type: String, default: null, trim: true },
    sysExceptionType: { type: String, default: null, trim: true },
    udProcessGrp: { type: String, default: null, trim: true }
});

const YieldSchema = new mongoose.Schema({
    site: { type: String, required: true, trim: true },           // Location
    operation: { type: String, required: true, trim: true },
    operationSeq: { type: Number, default: null },
    yield: { type: Number, default: null },
    sysTargetId: { type: Number, default: null },
    sysAuthId: { type: String, default: null, trim: true },
    sysSource: { type: String, default: 'BackEnd', trim: true },
    sysCreatedBy: { type: String, default: null, trim: true },
    sysCreationDate: { type: Date, default: Date.now },
    sysEntState: { type: String, default: 'ACTIVE', trim: true },
    sysLastModifiedBy: { type: String, default: null, trim: true },
    sysLastModifiedDate: { type: Date, default: null },
    sysNcType: { type: String, default: null, trim: true },
    sysErrCode: { type: String, default: null, trim: true },
    sysErrSvrty: { type: String, default: null, trim: true },
    sysFilter: { type: String, default: null, trim: true },
    sysExceptionType: { type: String, default: null, trim: true }
});

const StrikeRateSchema = new mongoose.Schema({
    grade: { type: String, required: true, trim: true },
    tdc: { type: String, required: true, trim: true },
    strikerate: { type: Number, required: true },
    operation: { type: String, required: true, trim: true },
    additionalStrikerate: { type: Number, default: null },
    sec1Max: { type: Number, default: null },
    sec1Min: { type: Number, required: true },
    sec2Max: { type: Number, default: null },
    sec2Min: { type: Number, required: true },
    steelSpec: { type: String, default: null, trim: true },
    steelType: { type: String, default: null, trim: true },
    operationSeq: { type: Number, default: null },
    sysTargetId: { type: Number, default: null },
    sysAuthId: { type: String, default: null, trim: true },
    sysSource: { type: String, default: 'BackEnd', trim: true },
    sysCreatedBy: { type: String, default: null, trim: true },
    sysCreationDate: { type: Date, default: Date.now },
    sysEntState: { type: String, default: 'ACTIVE', trim: true },
    sysLastModifiedBy: { type: String, default: null, trim: true },
    sysLastModifiedDate: { type: Date, default: null },
    sysNcType: { type: String, default: null, trim: true },
    sysErrCode: { type: String, default: null, trim: true },
    sysErrSvrty: { type: String, default: null, trim: true },
    sysFilter: { type: String, default: null, trim: true },
    sysExceptionType: { type: String, default: null, trim: true }
});

const RunRateSchema = new mongoose.Schema({
    siteId: { type: String, required: true, trim: true },
    grade: { type: String, default: null, trim: true },
    tdc: { type: String, required: true, trim: true },
    operation: { type: String, required: true, trim: true },
    qualityCode: { type: String, required: true, trim: true },
    steelGrade: { type: String, default: null, trim: true },
    runrate: { type: Number, required: true },
    cooldownTime: { type: Number, default: null },
    sec1Max: { type: Number, required: true },
    sec1Min: { type: Number, required: true },
    sec2Max: { type: Number, required: true },
    sec2Min: { type: Number, required: true },
    steelSpec: { type: String, default: null, trim: true },
    steelType: { type: String, default: null, trim: true },
    operationSeq: { type: Number, default: null },
    sysTargetId: { type: Number, default: null },
    sysAuthId: { type: String, default: null, trim: true },
    sysSource: { type: String, default: 'BackEnd', trim: true },
    sysCreatedBy: { type: String, default: null, trim: true },
    sysCreationDate: { type: Date, default: Date.now },
    sysEntState: { type: String, default: 'ACTIVE', trim: true },
    sysLastModifiedBy: { type: String, default: null, trim: true },
    sysLastModifiedDate: { type: Date, default: null },
    sysNcType: { type: String, default: null, trim: true },
    sysErrCode: { type: String, default: null, trim: true },
    sysErrSvrty: { type: String, default: null, trim: true },
    sysFilter: { type: String, default: null, trim: true },
    sysExceptionType: { type: String, default: null, trim: true }
});

export {
    QueueTimeSchema,
    YieldSchema,
    StrikeRateSchema,
    RunRateSchema
}