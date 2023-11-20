import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SseSpecification {
    CustomerManagedKeyEnabled?: Value<boolean>;
    KmsKeyArn?: Value<string>;
    constructor(properties: SseSpecification);
}
export interface VerifiedAccessGroupProperties {
    Description?: Value<string>;
    PolicyDocument?: Value<string>;
    SseSpecification?: SseSpecification;
    VerifiedAccessInstanceId: Value<string>;
    Tags?: List<ResourceTag>;
    PolicyEnabled?: Value<boolean>;
}
export default class VerifiedAccessGroup extends ResourceBase<VerifiedAccessGroupProperties> {
    static SseSpecification: typeof SseSpecification;
    constructor(properties: VerifiedAccessGroupProperties);
}
