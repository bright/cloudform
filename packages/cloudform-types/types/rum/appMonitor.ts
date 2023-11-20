/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AppMonitorConfiguration {
    MetricDestinations?: List<MetricDestination>
    IncludedPages?: List<Value<string>>
    ExcludedPages?: List<Value<string>>
    FavoritePages?: List<Value<string>>
    SessionSampleRate?: Value<number>
    AllowCookies?: Value<boolean>
    Telemetries?: List<Value<string>>
    IdentityPoolId?: Value<string>
    GuestRoleArn?: Value<string>
    EnableXRay?: Value<boolean>

    constructor(properties: AppMonitorConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomEvents {
    Status?: Value<string>

    constructor(properties: CustomEvents) {
        Object.assign(this, properties)
    }
}

export class MetricDefinition {
    EventPattern?: Value<string>
    ValueKey?: Value<string>
    UnitLabel?: Value<string>
    DimensionKeys?: {[key: string]: Value<string>}
    Namespace?: Value<string>
    Name!: Value<string>

    constructor(properties: MetricDefinition) {
        Object.assign(this, properties)
    }
}

export class MetricDestination {
    Destination!: Value<string>
    IamRoleArn?: Value<string>
    MetricDefinitions?: List<MetricDefinition>
    DestinationArn?: Value<string>

    constructor(properties: MetricDestination) {
        Object.assign(this, properties)
    }
}

export interface AppMonitorProperties {
    CustomEvents?: CustomEvents
    CwLogEnabled?: Value<boolean>
    Domain: Value<string>
    AppMonitorConfiguration?: AppMonitorConfiguration
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class AppMonitor extends ResourceBase<AppMonitorProperties> {
    static AppMonitorConfiguration = AppMonitorConfiguration
    static CustomEvents = CustomEvents
    static MetricDefinition = MetricDefinition
    static MetricDestination = MetricDestination

    constructor(properties: AppMonitorProperties) {
        super('AWS::RUM::AppMonitor', properties)
    }
}
