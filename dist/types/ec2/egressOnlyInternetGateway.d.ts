import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EgressOnlyInternetGatewayProperties {
    VpcId: Value<string>;
}
export default class EgressOnlyInternetGateway extends ResourceBase {
    constructor(properties: EgressOnlyInternetGatewayProperties, dependsOn?: Value<string>);
}
