import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

// import dts from 'rollup-plugin-dts';

const companies = ['company1', 'company2', 'company3'];

const modulesByCompany = {
  company1: 'fingerprint,typing,bot',
  company2: 'typing,bot',
  company3: '',
};

const rollupConfig = (args) => {
  const configs = companies.map((company) => ({
    input: 'src/index.ts',
    output: {
      file: `dist/bot-detect-${company}.js`,
      format: 'esm',
      sourcemap: true,
      inlineDynamicImports: true,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      replace({
        preventAssignment: true,
        'process.env.COMPANY_ID': JSON.stringify(company),
        'process.env.MODULES': JSON.stringify(modulesByCompany[company] || ''),
      }),
      dynamicImportVars({}),
    ],
  }));
  return [
    ...configs,
    // {
    //   input: 'dist/index.d.ts',
    //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    //   plugins: [dts()],
    // },
  ];
};

export default rollupConfig;
