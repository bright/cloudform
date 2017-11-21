import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface DimensionProperties {
    Name: Value<string>
    Value: Value<string>
}

export default class Dimension extends ResourceBase {
    constructor(properties: DimensionProperties, dependsOn?: Value<string>) {
        super('AWS::CloudWatch::Dimension', properties, dependsOn)
    }
}