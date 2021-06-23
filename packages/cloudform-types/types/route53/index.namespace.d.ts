import RecordSet_ from './recordSet';
import DNSSEC_ from './dnssec';
import HostedZone_ from './hostedZone';
import HealthCheck_ from './healthCheck';
import KeySigningKey_ from './keySigningKey';
import RecordSetGroup_ from './recordSetGroup';
export declare namespace Route53 {
    const RecordSet: typeof RecordSet_;
    const DNSSEC: typeof DNSSEC_;
    const HostedZone: typeof HostedZone_;
    const HealthCheck: typeof HealthCheck_;
    const KeySigningKey: typeof KeySigningKey_;
    const RecordSetGroup: typeof RecordSetGroup_;
    type RecordSet = RecordSet_;
    type DNSSEC = DNSSEC_;
    type HostedZone = HostedZone_;
    type HealthCheck = HealthCheck_;
    type KeySigningKey = KeySigningKey_;
    type RecordSetGroup = RecordSetGroup_;
}
