import { ResourceBase, ResourceTag } from '../resource';
import { List } from '../dataTypes';
export interface SuiteDefinitionProperties {
    SuiteDefinitionConfiguration: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class SuiteDefinition extends ResourceBase<SuiteDefinitionProperties> {
    constructor(properties: SuiteDefinitionProperties);
}
