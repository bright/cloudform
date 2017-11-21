import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RedrivePolicyProperties {
    deadLetterTargetArn?: Value<string>
    maxReceiveCount?: Value<number>
}

export default class RedrivePolicy extends ResourceBase {
    constructor(properties: RedrivePolicyProperties, dependsOn?: Value<string>) {
        super('AWS::SQS::RedrivePolicy', properties, dependsOn)
    }
}