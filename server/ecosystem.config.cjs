module.exports = {
  apps: [
    {
      name: 'kaveri-backend',
      script: './index.ts',
      interpreter: 'node',
      interpreter_args: '--loader ts-node/esm',
      watch: false,
      env: {
        PORT: 5000,
        NODE_ENV: 'production'
      }
    }
  ]
};

