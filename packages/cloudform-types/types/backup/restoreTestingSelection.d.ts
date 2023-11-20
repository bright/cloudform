import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KeyValue {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: KeyValue);
}
export declare class ProtectedResourceConditions {
    StringEquals?: List<KeyValue>;
    StringNotEquals?: List<KeyValue>;
    constructor(properties: ProtectedResourceConditions);
}
export interface RestoreTestingSelectionProperties {
    ProtectedResourceConditions?: ProtectedResourceConditions;
    ProtectedResourceType: Value<string>;
    RestoreMetadataOverrides?: {
        [key: string]: Value<string>;
    };
    RestoreTestingSelectionName: Value<string>;
    ProtectedResourceArns?: List<Value<string>>;
    RestoreTestingPlanName: Value<string>;
    IamRoleArn: Value<string>;
    ValidationWindowHours?: Value<number>;
}
export default class RestoreTestingSelection extends ResourceBase<RestoreTestingSelectionProperties> {
    static KeyValue: typeof KeyValue;
    static ProtectedResourceConditions: typeof ProtectedResourceConditions;
    constructor(properties: RestoreTestingSelectionProperties);
}
