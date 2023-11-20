import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ImageVersionProperties {
    ImageName: Value<string>;
    Horovod?: Value<boolean>;
    Processor?: Value<string>;
    JobType?: Value<string>;
    Alias?: Value<string>;
    ProgrammingLang?: Value<string>;
    VendorGuidance?: Value<string>;
    MLFramework?: Value<string>;
    Aliases?: List<Value<string>>;
    ReleaseNotes?: Value<string>;
    BaseImage: Value<string>;
}
export default class ImageVersion extends ResourceBase<ImageVersionProperties> {
    constructor(properties: ImageVersionProperties);
}
