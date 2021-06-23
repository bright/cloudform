"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Font {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Font = Font;
class BorderStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BorderStyle = BorderStyle;
class TileStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TileStyle = TileStyle;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class MarginStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MarginStyle = MarginStyle;
class GutterStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GutterStyle = GutterStyle;
class DataColorPalette {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataColorPalette = DataColorPalette;
class ThemeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThemeConfiguration = ThemeConfiguration;
class UIColorPalette {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UIColorPalette = UIColorPalette;
class SheetStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetStyle = SheetStyle;
class TileLayoutStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TileLayoutStyle = TileLayoutStyle;
class Typography {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Typography = Typography;
class Theme extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::Theme', properties);
    }
}
exports.default = Theme;
Theme.Font = Font;
Theme.BorderStyle = BorderStyle;
Theme.TileStyle = TileStyle;
Theme.ResourcePermission = ResourcePermission;
Theme.MarginStyle = MarginStyle;
Theme.GutterStyle = GutterStyle;
Theme.DataColorPalette = DataColorPalette;
Theme.ThemeConfiguration = ThemeConfiguration;
Theme.UIColorPalette = UIColorPalette;
Theme.SheetStyle = SheetStyle;
Theme.TileLayoutStyle = TileLayoutStyle;
Theme.Typography = Typography;
