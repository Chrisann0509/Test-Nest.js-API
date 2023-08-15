import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/test (POST)', async () => {
    try {
      const response = await request(app.getHttpServer())
        .post('/api/test') // 请求路径应该为 '/api/test'
        .send({ num: 5 })
        .expect(201);

      console.log('Response:', response.text); // Log the response for debugging
    } catch (error) {
      console.error('Error in test:', error);
      throw error; // Re-throw the error to fail the test
    }
  });

});
