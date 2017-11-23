import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface InternetGatewayProperties {
    Tags?: ResourceTag[];
}
export default class InternetGateway extends ResourceBase {
    constructor(properties: InternetGatewayProperties, dependsOn?: Value<string>);
}
