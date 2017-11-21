import {ResourceBase} from '../resource'
import {Value} from '../internal'
import RecordSet from './recordSet'



export interface RecordSetGroupProperties {
    HostedZoneId?: Value<string>
    HostedZoneName?: Value<string>
    Comment?: Value<string>
    RecordSets: RecordSet[]
}

export default class RecordSetGroup extends ResourceBase {
    constructor(properties: RecordSetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::RecordSetGroup', properties, dependsOn)
    }
}