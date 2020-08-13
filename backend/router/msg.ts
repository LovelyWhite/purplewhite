import express from "express";
let router = express.Router();
//发送信息
router.post("/sendmsg", (req, res) => {});
//查找信息
router.post("/findMsg", (req, res) => {});
//获取历史信息
router.post("/getHistoryMsgs", (req, res) => {});
//标记信息已收到
router.post("/markMsgRead", (req, res) => {});
//发送文件
router.post("/sendFile", (req, res) => {});


export default router;
