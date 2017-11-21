import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ShutdownEventConfigurationProperties {
    DelayUntilElbConnectionsDrained?: Value<boolean>
    ExecutionTimeout?: Value<number>
}

export default class ShutdownEventConfiguration extends ResourceBase {
    constructor(properties: ShutdownEventConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::ShutdownEventConfiguration', properties, dependsOn)
    }
}