### 설치

```bash
$ yarn add typeorm
```

> You need to install reflect-metadata shim:

```bash
$ yarn add reflect-metadata
```

> and import it somewhere in the global place of your app (for example in app.ts):

```ts
import "reflect-metadata";
```

> You may need to install node typings:

```bash
$ yarn add -D @types/node
```

> for MySQL or MariaDB

```bash
$ yarn add mysql
# 또는
$ yarn add mysql2
```

> tsconfig.json 파일 수정

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```
