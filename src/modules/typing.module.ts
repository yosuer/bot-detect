// @ts-nocheck
import { Module } from '../types';

class TypingModule implements Module {
  data = {};
  startTime = {};
  letterCount = {};

  start() {
    document.addEventListener('input', (event) => {
      const target = event.target;
      if (['TEXTAREA', 'INPUT'].includes(target.tagName)) {
        const text = target.value.trim();
        const inputId = target.id;
        this.letterCount[inputId] = text.length;

        if (!this.startTime[inputId] || this.letterCount[inputId] === 0) {
          this.startTime[inputId] = Date.now();
        }

        const elapsedTime = (Date.now() - this.startTime[inputId]) / 1000 / 60; // Convertir milisegundos a minutos
        const lpm = Math.round(this.letterCount[inputId] / elapsedTime);
        this.data[inputId] = lpm;

        Object.values(this.data).forEach((speed) => {
          if (speed > 2000 && speed !== Infinity) {
            console.log('[WARN] typing speed > 1000: ', speed);
          }
        });
      }
    });
  }
}

export default TypingModule;
