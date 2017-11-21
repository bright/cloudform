import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ScheduledActionProperties {
    AutoScalingGroupName: Value<string>
    DesiredCapacity?: Value<string>
    EndTime?: Value<string>
    MaxSize?: Value<number>
    MinSize?: Value<number>
    Recurrence?: Value<string>
    StartTime?: Value<string>
}

export default class ScheduledAction extends ResourceBase {
    constructor(properties: ScheduledActionProperties, dependsOn?: Value<string>) {
        super('AWS::AutoScaling::ScheduledAction', properties, dependsOn)
    }
}