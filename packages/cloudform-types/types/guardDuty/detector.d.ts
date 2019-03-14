import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DetectorProperties {
    FindingPublishingFrequency?: Value<string>;
    Enable: Value<boolean>;
}
export default class Detector extends ResourceBase<DetectorProperties> {
    constructor(properties: DetectorProperties);
}
