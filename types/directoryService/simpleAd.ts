import {ResourceBase} from '../resource'
import {Value} from '../internal'
import VpcSettings from './vpcSettings'

export type Size = "Large" | "Small" | "*"

export interface SimpleADProperties {
    CreateAlias?: Value<boolean>
    Description?: Value<string>
    EnableSso?: Value<boolean>
    Name: Value<string>
    Password: Value<string>
    ShortName?: Value<string>
    Size: Value<Size>
    VpcSettings: VpcSettings
}

export default class SimpleAD extends ResourceBase {
    constructor(properties: SimpleADProperties, dependsOn?: Value<string>) {
        super('AWS::DirectoryService::SimpleAD', properties, dependsOn)
    }
}