/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface IpPermissionProperties {
    FromPort: Value<number>
    IpRange: Value<string>
    Protocol: Value<string>
    ToPort: Value<number>
}

export class IpPermission extends ResourceBase {
    constructor(properties: IpPermissionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::GameLift::IpPermission', properties, dependsOn)
    }
}

export interface FleetProperties {
    BuildId: Value<string>
    Description?: Value<string>
    DesiredEC2Instances: Value<number>
    EC2InboundPermissions?: List<IpPermission>
    EC2InstanceType: Value<string>
    LogPaths?: List<Value<string>>
    MaxSize?: Value<number>
    MinSize?: Value<number>
    Name: Value<string>
    ServerLaunchParameters?: Value<string>
    ServerLaunchPath: Value<string>
}

export default class Fleet extends ResourceBase {
    constructor(properties: FleetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::GameLift::Fleet', properties, dependsOn)
    }
}
