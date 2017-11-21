import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface VpcConfigProperties {
    SecurityGroupIds: Value<string>[]
    SubnetIds: Value<string>[]
}

export default class VpcConfig extends ResourceBase {
    constructor(properties: VpcConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Lambda::VpcConfig', properties, dependsOn)
    }
}