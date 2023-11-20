import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SourceApiAssociationConfig {
    MergeType?: Value<string>;
    constructor(properties: SourceApiAssociationConfig);
}
export interface SourceApiAssociationProperties {
    Description?: Value<string>;
    SourceApiAssociationConfig?: SourceApiAssociationConfig;
    MergedApiIdentifier?: Value<string>;
    SourceApiIdentifier?: Value<string>;
}
export default class SourceApiAssociation extends ResourceBase<SourceApiAssociationProperties> {
    static SourceApiAssociationConfig: typeof SourceApiAssociationConfig;
    constructor(properties?: SourceApiAssociationProperties);
}
