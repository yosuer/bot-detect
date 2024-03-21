export class Agent {
  constructor(private names: string[]) {}

  async init() {
    for (const name of this.names) {
      if (name) {
        import(`./modules/${name}.module.ts`).then(({ default: Module }) => {
          const module = new Module();
          module.start();
        });
      }
    }
  }
}
