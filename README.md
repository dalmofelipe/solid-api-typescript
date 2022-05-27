
# SOLID TS API - Rocketseat

https://www.youtube.com/watch?v=vAV4Vy4jfkc


```bash
yarn init -y 

yarn add express uuidv4 nodemailer

yarn add typescript ts-node-dev @types/express @types/nodemailer -D

tsc --init
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "allowJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": false,
    "skipLibCheck": true
  },
  "include": [
    "src/**/*.ts"
  ]
}
```

package.json

```bash
"scripts": {
    "dev": "ts-node-dev --transpile-only --respawn --ignore-watch node_modules src/server.ts"
},
```

rest.http

```r
POST http://localhost:3333/users HTTP/1.1
Content-Type: application/json

{
    "name": "Dalmo Felipe",
    "email": "dalmo@email.com",
    "password": "123123"
}
```


MailProvider config

```js
{
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'user-mail-provider',
    pass: 'pass-mail-provider'
  }
}
```