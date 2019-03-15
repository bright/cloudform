import Bucket_ from './bucket';
import BucketPolicy_ from './bucketPolicy';
export declare namespace S3 {
    const Bucket: typeof Bucket_;
    const BucketPolicy: typeof BucketPolicy_;
    type Bucket = Bucket_;
    type BucketPolicy = BucketPolicy_;
}
