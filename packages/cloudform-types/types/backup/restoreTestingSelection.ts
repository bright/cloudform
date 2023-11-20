/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class KeyValue {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: KeyValue) {
        Object.assign(this, properties)
    }
}

export class ProtectedResourceConditions {
    StringEquals?: List<KeyValue>
    StringNotEquals?: List<KeyValue>

    constructor(properties: ProtectedResourceConditions) {
        Object.assign(this, properties)
    }
}

export interface RestoreTestingSelectionProperties {
    ProtectedResourceConditions?: ProtectedResourceConditions
    ProtectedResourceType: Value<string>
    RestoreMetadataOverrides?: {[key: string]: Value<string>}
    RestoreTestingSelectionName: Value<string>
    ProtectedResourceArns?: List<Value<string>>
    RestoreTestingPlanName: Value<string>
    IamRoleArn: Value<string>
    ValidationWindowHours?: Value<number>
}

export default class RestoreTestingSelection extends ResourceBase<RestoreTestingSelectionProperties> {
    static KeyValue = KeyValue
    static ProtectedResourceConditions = ProtectedResourceConditions

    constructor(properties: RestoreTestingSelectionProperties) {
        super('AWS::Backup::RestoreTestingSelection', properties)
    }
}
