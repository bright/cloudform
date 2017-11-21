import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type StorageClass = "Glacier"

export interface NoncurrentVersionTransitionProperties {
    StorageClass: Value<StorageClass>
    TransitionInDays?: Value<number>
}

export default class NoncurrentVersionTransition extends ResourceBase {
    constructor(properties: NoncurrentVersionTransitionProperties, dependsOn?: Value<string>) {
        super('AWS::S3::NoncurrentVersionTransition', properties, dependsOn)
    }
}