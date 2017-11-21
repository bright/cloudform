import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface InternetGatewayProperties {
    Tags?: ResourceTag[]
}

export default class InternetGateway extends ResourceBase {
    constructor(properties: InternetGatewayProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::InternetGateway', properties, dependsOn)
    }
}