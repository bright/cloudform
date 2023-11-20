import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LogGroupProperties {
    RetentionInDays?: Value<number>;
    KmsKeyId?: Value<string>;
    LogGroupName?: Value<string>;
    Tags?: List<ResourceTag>;
    DataProtectionPolicy?: {
        [key: string]: any;
    };
}
export default class LogGroup extends ResourceBase<LogGroupProperties> {
    constructor(properties?: LogGroupProperties);
}
