import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ArchiveProperties {
    ArchiveName?: Value<string>;
    SourceArn: Value<string>;
    Description?: Value<string>;
    EventPattern?: {
        [key: string]: any;
    };
    RetentionDays?: Value<number>;
}
export default class Archive extends ResourceBase<ArchiveProperties> {
    constructor(properties: ArchiveProperties);
}
