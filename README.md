# express
```sh
npm install sequelize -S
npm install sequelize-cli -D

npx sequelize-cli init # 初始化
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string # 建立模型
npx sequelize-cli db:create # 建库
npx sequelize-cli db:migrate # 迁移
```
```sh
npm install body-parser -S
npm install express-validator -S 
```