"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsvStoreOptions = exports.StoreOptions = exports.SseConfig = exports.ReferenceItem = void 0;
const resource_1 = require("../resource");
class ReferenceItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceItem = ReferenceItem;
class SseConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SseConfig = SseConfig;
class StoreOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StoreOptions = StoreOptions;
class TsvStoreOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TsvStoreOptions = TsvStoreOptions;
class AnnotationStore extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Omics::AnnotationStore', properties);
    }
}
exports.default = AnnotationStore;
AnnotationStore.ReferenceItem = ReferenceItem;
AnnotationStore.SseConfig = SseConfig;
AnnotationStore.StoreOptions = StoreOptions;
AnnotationStore.TsvStoreOptions = TsvStoreOptions;
