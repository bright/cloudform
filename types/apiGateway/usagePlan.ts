import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ApiStage from './apiStage'
import Quota from './quota'
import Throttle from './throttle'



export interface UsagePlanProperties {
    ApiStages?: ApiStage[]
    Description?: Value<string>
    Quota?: Quota
    Throttle?: Throttle
    UsagePlanName?: Value<string>
}

export default class UsagePlan extends ResourceBase {
    constructor(properties: UsagePlanProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::UsagePlan', properties, dependsOn)
    }
}