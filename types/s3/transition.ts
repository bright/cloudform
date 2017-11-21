import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type StorageClass = "Glacier"

export interface TransitionProperties {
    StorageClass: Value<StorageClass>
    TransitionDate?: Value<string>
    TransitionInDays?: Value<number>
}

export default class Transition extends ResourceBase {
    constructor(properties: TransitionProperties, dependsOn?: Value<string>) {
        super('AWS::S3::Transition', properties, dependsOn)
    }
}