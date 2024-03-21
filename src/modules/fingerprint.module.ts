import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { Module } from '../types';

const fpPromise = FingerprintJS.load();

class FingerprintModule implements Module {
  async start() {
    const fp = await fpPromise;
    const result = await fp.get();

    console.log('🚀 ~ FingerprintModule ~ start:', result);
  }
}

export default FingerprintModule;
