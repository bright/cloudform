import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceSpec {
    InstanceType?: Value<string>;
    SageMakerImageArn?: Value<string>;
    SageMakerImageVersionArn?: Value<string>;
    constructor(properties: ResourceSpec);
}
export interface AppProperties {
    AppName: Value<string>;
    AppType: Value<string>;
    DomainId: Value<string>;
    ResourceSpec?: ResourceSpec;
    Tags?: List<ResourceTag>;
    UserProfileName: Value<string>;
}
export default class App extends ResourceBase<AppProperties> {
    static ResourceSpec: typeof ResourceSpec;
    constructor(properties: AppProperties);
}
