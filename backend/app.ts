import express from 'express'
import bodyParser from "body-parser";
const app = express()
const router = express.Router();
const port = 3000
/**
 * Author: lovelywhite
 * express后端路由，分为以下几个模块
 * 1.信息收发模块
 * 2.空间信息模块
 * 3.权限验证模块
 * 4.个人信息处理模块
 */
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('这里是紫白后端处理程序'))

app.listen(port, () => console.log(`紫白后端处理程序已运行在 ${port} 端口!`))