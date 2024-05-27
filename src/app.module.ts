import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UploadModule } from './upload/upload.module'; // Import the UploadModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucketModule } from './bucket/bucket.module'; // Import the BucketModule
import { MulterModule } from '@nestjs/platform-express';
import { OtpModule } from './otp/otp.module';
import { UserModule } from './user/user.module'; // Import the UserModule
import { CheckUserController } from './store/user.controller'; // Import the DataController
import { WebsiteController } from './upload/upload.controller'; // Update the path accordingly
import { S3Module } from './s3/s3.module';
import { PostsModule } from './posts/posts.module'; // Assuming you also have a 'posts' module

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    OtpModule,
    UploadModule, // Add the UploadModule here
    BucketModule, // Add the BucketModule here
    MulterModule.register({
      dest: './uploads', // Destination folder for uploaded files
    }),
    UserModule, // Add the UserModule here
    S3Module, 
    PostsModule
  ],
  controllers: [
    AppController,
    CheckUserController,
    WebsiteController, // Include the DataController here
  ],
  providers: [AppService],
})
export class AppModule {}
