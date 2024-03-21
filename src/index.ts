import { Agent } from './agent';

const modules = (process.env.MODULES || '').split(',');
console.log('🚀 ~ modules:', modules);

async function bootstrap() {
  console.log('COMPANY_ID', `${process.env.COMPANY_ID}`);
  const agent = new Agent(modules);

  document.addEventListener('DOMContentLoaded', () => {
    agent.init();
  });
}

bootstrap();
