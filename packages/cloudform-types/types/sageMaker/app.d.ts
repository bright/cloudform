import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceSpec {
    SageMakerImageArn?: Value<string>;
    InstanceType?: Value<string>;
    SageMakerImageVersionArn?: Value<string>;
    constructor(properties: ResourceSpec);
}
export interface AppProperties {
    DomainId: Value<string>;
    ResourceSpec?: ResourceSpec;
    AppType: Value<string>;
    Tags?: List<ResourceTag>;
    UserProfileName: Value<string>;
    AppName: Value<string>;
}
export default class App extends ResourceBase<AppProperties> {
    static ResourceSpec: typeof ResourceSpec;
    constructor(properties: AppProperties);
}
