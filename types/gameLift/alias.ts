/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface RoutingStrategyProperties {
    FleetId?: Value<string>
    Message?: Value<string>
    Type: Value<string>
}

export class RoutingStrategy extends ResourceBase {
    constructor(properties: RoutingStrategyProperties, dependsOn?: Value<string>) {
        super('AWS::GameLift::RoutingStrategy', properties, dependsOn)
    }
}

export interface AliasProperties {
    Description?: Value<string>
    Name: Value<string>
    RoutingStrategy: RoutingStrategy
}

export default class Alias extends ResourceBase {
    constructor(properties: AliasProperties, dependsOn?: Value<string>) {
        super('AWS::GameLift::Alias', properties, dependsOn)
    }
}