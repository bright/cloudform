import Key_ from './key';
import ReplicaKey_ from './replicaKey';
import Alias_ from './alias';
export declare namespace KMS {
    const Key: typeof Key_;
    const ReplicaKey: typeof ReplicaKey_;
    const Alias: typeof Alias_;
    type Key = Key_;
    type ReplicaKey = ReplicaKey_;
    type Alias = Alias_;
}
