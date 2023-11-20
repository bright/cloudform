import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface WALWorkspaceProperties {
    WALWorkspaceName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class WALWorkspace extends ResourceBase<WALWorkspaceProperties> {
    constructor(properties?: WALWorkspaceProperties);
}
