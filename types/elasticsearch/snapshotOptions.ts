import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SnapshotOptionsProperties {
    AutomatedSnapshotStartHour?: Value<number>
}

export default class SnapshotOptions extends ResourceBase {
    constructor(properties: SnapshotOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::Elasticsearch::SnapshotOptions', properties, dependsOn)
    }
}