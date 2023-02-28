import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common'
import { Cache, CachingConfig } from 'cache-manager'
import { Json } from 'nestjs-zod/z'
@Injectable()
export class CacheSystemService {
  constructor (@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async get (key: string) {
    return this.cacheManager.get(key)
  }
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  async set (key: string, value: any, options?: CachingConfig) {
    return this.cacheManager.set(key, value, options)
  }
}
