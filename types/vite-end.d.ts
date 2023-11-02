/// <reference types="vitest/globals" />

interface ImportMetaEnv {}
interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly vitest: typeof import('vitest')['vitest'];

}
