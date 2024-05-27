// s3/s3.service.ts
import { Injectable } from '@nestjs/common';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private readonly s3: S3Client;
  private readonly bucketName = 'your-bucket-name'; // Replace with your bucket name
  private readonly region = 'your-bucket-region'; // Replace with your bucket region

  constructor() {
    this.s3 = new S3Client({ region: this.region });
  }

  async listObjects() {
    const command = new ListObjectsCommand({ Bucket: this.bucketName });
    const data = await this.s3.send(command);
    return data.Contents;
  }
}
