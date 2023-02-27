import { Client } from '@coingate/coingate-sdk'
const coingateAPI = new Client(process.env.COINGATE_SECRET_KEY, true)

export default coingateAPI
