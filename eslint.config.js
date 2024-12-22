// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

export default tseslint.config({
  ignores: ['dist'],  // Игнорировать папку dist
  extends: [
    'eslint:recommended',  // Стандартные правила ESLint
    'plugin:@typescript-eslint/recommended',  // Рекомендуемые правила для TypeScript
    'plugin:react/recommended',  // Рекомендуемые правила для React
    'plugin:react-hooks/recommended',  // Рекомендуемые правила для React Hooks
  ],
  parser: '@typescript-eslint/parser',  // Использование парсера для TypeScript
  parserOptions: {
    ecmaVersion: 2020,  // Поддержка синтаксиса ECMAScript 2020
    sourceType: 'module',  // Использование модульной системы
  },
  globals: {
    browser: true,  // Установка глобальных переменных для браузера
  },
  plugins: [
    'react-hooks',  // Плагин для React Hooks
    'react-refresh',  // Плагин для React Refresh (если используется, например, для Hot Module Replacement)
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Добавьте другие настройки правил, например:
    'no-console': 'warn',  // Предупреждать об использовании console.log
    '@typescript-eslint/no-explicit-any': 'off',  // Отключить правило для 'any'
    'react-hooks/rules-of-hooks': 'error',  // Ошибка, если Hooks вызываются не по правилам
    'react-hooks/exhaustive-deps': 'warn',  // Предупреждать, если зависимости в useEffect или useCallback неправильные
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      // Дополнительные правила для файлов .ts и .tsx
    },
  ],
})


// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )
