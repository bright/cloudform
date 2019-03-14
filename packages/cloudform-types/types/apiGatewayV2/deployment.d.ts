import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DeploymentProperties {
    Description?: Value<string>;
    StageName?: Value<string>;
    ApiId: Value<string>;
}
export default class Deployment extends ResourceBase<DeploymentProperties> {
    constructor(properties: DeploymentProperties);
}
