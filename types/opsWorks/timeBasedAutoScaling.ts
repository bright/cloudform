import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface TimeBasedAutoScalingProperties {
    Sunday?: any
    Monday?: any
    Tuesday?: any
    Wednesday?: any
    Thursday?: any
    Friday?: any
    Saturday?: any
}

export default class TimeBasedAutoScaling extends ResourceBase {
    constructor(properties: TimeBasedAutoScalingProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::TimeBasedAutoScaling', properties, dependsOn)
    }
}