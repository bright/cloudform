import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Events = "*" | "all" | "updateReference" | "createReference" | "deleteReference"

export interface TriggerProperties {
    Branches?: Value<string>[]
    CustomData?: Value<string>
    DestinationArn?: Value<string>
    Events?: Value<Events>
    Name?: Value<string>
}

export default class Trigger extends ResourceBase {
    constructor(properties: TriggerProperties, dependsOn?: Value<string>) {
        super('AWS::CodeCommit::Trigger', properties, dependsOn)
    }
}