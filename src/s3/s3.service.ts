// s3/s3.service.ts
import { Injectable } from '@nestjs/common';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private readonly s3: S3Client;
  private readonly bucketName = 'ok767777'; // Update with your bucket name
  private readonly region = 'us-west-004'; // Update with your bucket region
  private readonly accessKeyId = '004c793eb828ace0000000004'; // Update with your access key ID
  private readonly secretAccessKey = 'K004H1NvDQ+d9fD9sy9iBsYzd8f4/r8'; // Update with your secret access key

  constructor() {
    this.s3 = new S3Client({
      region: this.region,
      endpoint: 'https://s3.us-west-004.backblazeb2.com',
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }

  async listObjects() {
    const command = new ListObjectsCommand({ Bucket: this.bucketName });
    const data = await this.s3.send(command);
    return data.Contents.map(item => item.Key);
  }
}
