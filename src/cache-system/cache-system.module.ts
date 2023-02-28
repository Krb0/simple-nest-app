import { Module } from '@nestjs/common'
import { CacheSystemService } from './cache-system.service'

@Module({
  providers: [CacheSystemService],
})
export class CacheSystemModule {}
