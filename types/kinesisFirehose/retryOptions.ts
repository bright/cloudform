import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RetryOptionsProperties {
    DurationInSeconds: Value<number>
}

export default class RetryOptions extends ResourceBase {
    constructor(properties: RetryOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::RetryOptions', properties, dependsOn)
    }
}