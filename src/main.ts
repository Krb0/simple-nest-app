import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { patchNestJsSwagger } from 'nestjs-zod'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  patchNestJsSwagger()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, document)
  app.enableCors()
  await app.listen(5000)
}
bootstrap()

const swaggerConfig = new DocumentBuilder()
  .setTitle('Crypto Project')
  .setDescription('The Crypto Project API description')
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    'authorization',
  )
  .build()
