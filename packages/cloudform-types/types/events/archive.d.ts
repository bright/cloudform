import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ArchiveProperties {
    EventPattern?: {
        [key: string]: any;
    };
    Description?: Value<string>;
    SourceArn: Value<string>;
    ArchiveName?: Value<string>;
    RetentionDays?: Value<number>;
}
export default class Archive extends ResourceBase<ArchiveProperties> {
    constructor(properties: ArchiveProperties);
}
