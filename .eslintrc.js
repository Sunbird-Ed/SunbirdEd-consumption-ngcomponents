module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    env: {
      node: true,
      browser: true
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'curly': ['error'],
      'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
      'max-len': ['warn', { 'code': 180 }],
      'no-eval': ['error'],
      'no-trailing-spaces': ['error'],
      'no-unused-expressions': ['warn'],
      'prefer-const': ['error'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-self-assign': ['warn'],
      
      
      '@typescript-eslint/no-empty-interface': ['warn'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-inferrable-types': ['error', { 'ignoreParameters': true }],
      
      
      '@typescript-eslint/no-empty-function': ['warn'],  
      '@typescript-eslint/explicit-module-boundary-types': ['off'],  
    },
    overrides: [
      {
        files: ['*.component.ts'],
        rules: {
          '@typescript-eslint/no-empty-function': 'off',  
          '@typescript-eslint/explicit-module-boundary-types': 'off' 
        }
      },
      {
       
        files: ['*.service.ts', '*.directive.ts', '*.pipe.ts'],
        rules: {
          '@typescript-eslint/explicit-module-boundary-types': 'warn'  
        }
      }
    ],
    ignorePatterns: [
      'node_modules/',
      'dist/',
      'coverage/',
      'scripts/',
      '*.js',
      '**/*.spec.ts',
      '**/test.ts',
      '**/public_api.ts',
      'e2e/'
    ]
  };