import botD from '@fingerprintjs/botd';
import { Module } from '../types';

const botPromise = botD.load();

class BotModule implements Module {
  async start() {
    const fp = await botPromise;
    const result = fp.detect();

    console.log('🚀 ~ BotModule ~ start:', result);
  }
}

export default BotModule;
