import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Activity {
    SelectAttributes?: SelectAttributes;
    Datastore?: Datastore;
    Filter?: Filter;
    AddAttributes?: AddAttributes;
    Channel?: Channel;
    DeviceShadowEnrich?: DeviceShadowEnrich;
    Math?: Math;
    Lambda?: Lambda;
    DeviceRegistryEnrich?: DeviceRegistryEnrich;
    RemoveAttributes?: RemoveAttributes;
    constructor(properties: Activity);
}
export declare class AddAttributes {
    Next?: Value<string>;
    Attributes: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
    constructor(properties: AddAttributes);
}
export declare class Channel {
    ChannelName: Value<string>;
    Next?: Value<string>;
    Name: Value<string>;
    constructor(properties: Channel);
}
export declare class Datastore {
    DatastoreName: Value<string>;
    Name: Value<string>;
    constructor(properties: Datastore);
}
export declare class DeviceRegistryEnrich {
    Attribute: Value<string>;
    Next?: Value<string>;
    ThingName: Value<string>;
    RoleArn: Value<string>;
    Name: Value<string>;
    constructor(properties: DeviceRegistryEnrich);
}
export declare class DeviceShadowEnrich {
    Attribute: Value<string>;
    Next?: Value<string>;
    ThingName: Value<string>;
    RoleArn: Value<string>;
    Name: Value<string>;
    constructor(properties: DeviceShadowEnrich);
}
export declare class Filter {
    Filter: Value<string>;
    Next?: Value<string>;
    Name: Value<string>;
    constructor(properties: Filter);
}
export declare class Lambda {
    BatchSize: Value<number>;
    Next?: Value<string>;
    LambdaName: Value<string>;
    Name: Value<string>;
    constructor(properties: Lambda);
}
export declare class Math {
    Attribute: Value<string>;
    Next?: Value<string>;
    Math: Value<string>;
    Name: Value<string>;
    constructor(properties: Math);
}
export declare class RemoveAttributes {
    Next?: Value<string>;
    Attributes: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: RemoveAttributes);
}
export declare class SelectAttributes {
    Next?: Value<string>;
    Attributes: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: SelectAttributes);
}
export interface PipelineProperties {
    PipelineName?: Value<string>;
    Tags?: List<ResourceTag>;
    PipelineActivities: List<Activity>;
}
export default class Pipeline extends ResourceBase<PipelineProperties> {
    static Activity: typeof Activity;
    static AddAttributes: typeof AddAttributes;
    static Channel: typeof Channel;
    static Datastore: typeof Datastore;
    static DeviceRegistryEnrich: typeof DeviceRegistryEnrich;
    static DeviceShadowEnrich: typeof DeviceShadowEnrich;
    static Filter: typeof Filter;
    static Lambda: typeof Lambda;
    static Math: typeof Math;
    static RemoveAttributes: typeof RemoveAttributes;
    static SelectAttributes: typeof SelectAttributes;
    constructor(properties: PipelineProperties);
}
