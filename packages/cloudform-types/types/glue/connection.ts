/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ConnectionInput {
    Description?: Value<string>
    ConnectionType!: Value<string>
    MatchCriteria?: List<Value<string>>
    PhysicalConnectionRequirements?: PhysicalConnectionRequirements
    ConnectionProperties!: {[key: string]: any}
    Name?: Value<string>

    constructor(properties: ConnectionInput) {
        Object.assign(this, properties)
    }
}

export class PhysicalConnectionRequirements {
    AvailabilityZone?: Value<string>
    SecurityGroupIdList?: List<Value<string>>
    SubnetId?: Value<string>

    constructor(properties: PhysicalConnectionRequirements) {
        Object.assign(this, properties)
    }
}

export interface ConnectionProperties {
    ConnectionInput: ConnectionInput
    CatalogId: Value<string>
}

export default class Connection extends ResourceBase<ConnectionProperties> {
    static ConnectionInput = ConnectionInput
    static PhysicalConnectionRequirements = PhysicalConnectionRequirements

    constructor(properties: ConnectionProperties) {
        super('AWS::Glue::Connection', properties)
    }
}
