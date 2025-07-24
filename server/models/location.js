import mongoose from "mongoose"
import {
    RunRateSchema,
    QueueTimeSchema,
    StrikeRateSchema,
    YieldSchema
} from './schemas/matric.js'


const JamsedpurRunRateModel = mongoose.model("JamsedpurRunRateModel",RunRateSchema)
const JamsedpurQueueTimeModel = mongoose.model("JamsedpurQueueTime", QueueTimeSchema)
const JamsedpurStrikRateModel = mongoose.model("JamsedpurStrikRateModel", StrikeRateSchema)
const JamsedpurYieldModel = mongoose.model("JamsedpurYieldModel", YieldSchema)

const KolkataRunRateModel = mongoose.model("KolkataRunRateModel",RunRateSchema)
const KolkataQueueTimeModel = mongoose.model("KolkataQueueTime", QueueTimeSchema)
const KolkataStrikRateModel = mongoose.model("KolkataStrikRateModel", StrikeRateSchema)
const KolkataYieldModel = mongoose.model("KolkataYieldModel", YieldSchema)

const MumbaiRunRateModel = mongoose.model("MumbaiRunRateModel",RunRateSchema)
const MumbaiQueueTimeModel = mongoose.model("MumbaiQueueTime", QueueTimeSchema)
const MumbaiStrikRateModel = mongoose.model("MumbaiStrikRateModel", StrikeRateSchema)
const MumbaiYieldModel = mongoose.model("MumbaiYieldModel", YieldSchema)

const OdishaRunRateModel = mongoose.model("OdishaRunRateModel",RunRateSchema)
const OdishaQueueTimeModel = mongoose.model("OdishaQueueTime", QueueTimeSchema)
const OdishaStrikRateModel = mongoose.model("OdishaStrikRateModel", StrikeRateSchema)
const OdishaYieldModel = mongoose.model("OdishaYieldModel", YieldSchema)


export {
    JamsedpurQueueTimeModel,
    JamsedpurRunRateModel,
    JamsedpurStrikRateModel,
    JamsedpurYieldModel,
    KolkataQueueTimeModel,
    KolkataRunRateModel,
    KolkataStrikRateModel,
    KolkataYieldModel,
    MumbaiQueueTimeModel,
    MumbaiRunRateModel,
    MumbaiStrikRateModel,
    MumbaiYieldModel,
    OdishaQueueTimeModel,
    OdishaRunRateModel,
    OdishaStrikRateModel,
    OdishaYieldModel
}
