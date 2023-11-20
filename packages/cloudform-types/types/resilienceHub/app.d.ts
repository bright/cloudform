import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EventSubscription {
    EventType: Value<string>;
    SnsTopicArn?: Value<string>;
    Name: Value<string>;
    constructor(properties: EventSubscription);
}
export declare class PermissionModel {
    Type: Value<string>;
    CrossAccountRoleArns?: List<Value<string>>;
    InvokerRoleName?: Value<string>;
    constructor(properties: PermissionModel);
}
export declare class PhysicalResourceId {
    Type: Value<string>;
    Identifier: Value<string>;
    AwsRegion?: Value<string>;
    AwsAccountId?: Value<string>;
    constructor(properties: PhysicalResourceId);
}
export declare class ResourceMapping {
    MappingType: Value<string>;
    LogicalStackName?: Value<string>;
    ResourceName?: Value<string>;
    TerraformSourceName?: Value<string>;
    PhysicalResourceId: PhysicalResourceId;
    EksSourceName?: Value<string>;
    constructor(properties: ResourceMapping);
}
export interface AppProperties {
    Description?: Value<string>;
    AppTemplateBody: Value<string>;
    AppAssessmentSchedule?: Value<string>;
    PermissionModel?: PermissionModel;
    ResourceMappings: List<ResourceMapping>;
    EventSubscriptions?: List<EventSubscription>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
    ResiliencyPolicyArn?: Value<string>;
}
export default class App extends ResourceBase<AppProperties> {
    static EventSubscription: typeof EventSubscription;
    static PermissionModel: typeof PermissionModel;
    static PhysicalResourceId: typeof PhysicalResourceId;
    static ResourceMapping: typeof ResourceMapping;
    constructor(properties: AppProperties);
}
