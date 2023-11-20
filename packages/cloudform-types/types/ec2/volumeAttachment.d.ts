import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VolumeAttachmentProperties {
    VolumeId: Value<string>;
    InstanceId: Value<string>;
    Device?: Value<string>;
}
export default class VolumeAttachment extends ResourceBase<VolumeAttachmentProperties> {
    constructor(properties: VolumeAttachmentProperties);
}
