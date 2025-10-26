let node = new Object();
let fs,path
try{
    fs = require('fs');
    path = require('path');
    node['fs'] = fs;
    node['path'] = path;
}
catch(e){
    console.log('当前环境为:非node');
}
//算法
// let yj = new Object()


//快捷随机数

const rdm = new Object()

/**
 * 获取帮助
 * @returns 帮助字符串
 */
rdm.help = function(){
    return`
    Yanjer随机库：
    rdm.help：随机库帮助
    rdm.N(min, max)：对范围随机取整数
    rdm.P()：0-100%随机取整数
    rdm.PN()：0-100随机取整数
    rdm.PF()：0-1随机取小数
    rdm.color()：随机颜色
    rdm.help()：随机库帮助

    `
}
/**
 * 对范围随机取整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机整数
 */
rdm.N = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *  0-100%随机取整数
 * @returns {string} 随机整百分率
 */
rdm.P = function() {
    return `${Math.floor(Math.random() * 101)}%`;
}

/**
 *  0-100随机取整数
 * @returns {number} 随机整数
 */
rdm.PN = function() {
    return Math.floor(Math.random() * 101);
}

/**
 *  0-1随机取小数
 * @returns {number} 随机小数
 */
rdm.PF = function() {
    return Math.random();
}

/**
 * 随机数字id(小->最大16位 快)
 * @param {number} length 长度
 * @returns {string} 随机数字id
 */
rdm.Nid = function(length) {
    if(length>16){length = 16};
    let r = String(Math.random()).split('.')[1].substring(0, length)
    if(r.length < length){
        r += String(Math.random()).split('.')[1].substring(0, length - r.length)
    }
    return r;
}

/**
 * 随机数字id(大->无限制 中)
 * @param {number} length 长度
 * @returns {string} 随机数字id
 */
rdm.NidM = function(length) {
    if(length <= 16 || length == undefined){
        return String(Math.random()).split('.')[1].substring(0, length);
    }else{
        let n = Math.floor(length/16),end=length%16,result=new String();
        for(let i = 0; i < n; i++){
            result += String(rdm.Nid(16));
            console.log(result);
            console.log(result.length);
        }
        result += String(rdm.Nid(end));
        console.log(result);
        console.log(result.length);
        return result;
    }
}

/**
 * 时间随机数
 * @param {number | string} timeL 时间长度 full时为年到毫秒，其他时为年到截取位置
 * @param {number} extraL 时间轴以外长度
 * @returns {string} 随机时间随机数
 */
rdm.Tid = function(timeL, extraL) {
    let time = new Date().toISOString().match(/\d+/g).join('')
    if(timeL !== 'full'){
        time = time.slice(0, timeL);
    }
    let extra = rdm.Nid(extraL);
    return `${time}${extra}`; 
}

/**
 * 随机字符串(无限制)
 * @param {number} length 长度
 * @returns {string} 随机字符串
 */
rdm.Sid = function(length) {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }
    return result;
}
/**
 * 随机复杂字符串(无限制)
 * @param {number} length 长度
 * @returns {string} 随机字符串
 */
rdm.Xid = function(length) {
    let x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\/-_~!@#$%^&*()_+{}[]|\;:"<>,.?';
    let result = '';
        result += x.charAt(Math.floor(Math.random() * x.length));
    for (let i = 0; i < length - 1; i++) {
        result += x.charAt(Math.floor(Math.random() * x.length));
    }
    return result;
}
//随机颜色
rdm.color = function() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    // console.log(
    // `%c ${color}: %c ${color}`,
    // `color: ${color};`,
    // `background-color: ${color};`
// );
    return color;
}

class inlineCode{
    
    testEnvironment(){
        let Env = typeof process != undefined
        return Env;
    }

    constructor(){
        if(this.testEnvironment){
            console.log('Class:inlineCode() 已启用');
        }else{
            throw new Error('该类只能在Node环境下使用');
        }
    }
    run(code,path,callback){
        //path
        //在指定进程运行
        //通常用于操作指定进程的内容
        if(path == 'this'){
            eval(code);
        }
        // else if(node.fs.statSync(path).isFile()){
        //     if(node.path.extname(path) == '.html'){
        //         let Wcode = node.fs.readFileSync(code, 'utf8');
        //         let origin = node.fs.readFileSync(path, 'utf8');
        //         let changeContent = origin + `<script from='YANJER-MAIN/inlineCode()'>\n${Wcode}\n</script>`;
        //         node.fs.writeFileSync(path, changeContent, 'utf8');
        //         callback(true);
        //     }
        // }
    }
    inject(code,methodArgs,path,callback){
        testEnvironment()
        let Wcode;
        if(node.fs.statSync(code).isFile()){
            Wcode = node.fs.readFileSync(code, 'utf8');
        }else{
            Wcode = code;
        }
        //写入模式
        if(methodArgs.split(' ')[0] == 'write'){
            if(node.fs.statSync(path).isFile()){
                if(node.path.extname(path) == '.html'){
                    let origin = node.fs.readFileSync(path, 'utf8');
                    let changeContent = origin + `<script from='YANJER-MAIN/inlineCode()'>\n${Wcode}\n</script>`;
                    node.fs.writeFileSync(path, changeContent, 'utf8');
                    callback(true);
                }else if(node.path.extname(path) == '.js'){
                    let origin = node.fs.readFileSync(path, 'utf8');
                    let changeContent
                    if(methodArgs.split(' ')[2] == 'independence'){
                        Wcode = `\{ ${Wcode} \}`
                    }
                    //开头
                    if(methodArgs.split(' ')[1] == 'begin'){
                        changeContent = `\n${Wcode}\n` + origin;
                    }
                    //末尾
                    if(methodArgs.split(' ')[1] == 'end'){
                        changeContent = origin + `\n${Wcode}\n`;
                    }
                    //指定行
                    if(Number(methodArgs.split(' ')[1]).isNaN() != true){
                        changeContent = origin.slice(0, Number(methodArgs.split(' ')[1])) 
                        + `\n${Wcode}\n` + origin.slice(Number(methodArgs.split(' ')[1]));
                    }
                    node.fs.writeFileSync(path, changeContent, 'utf8');
                    callback(true);
                }
            }
        }
        if(methodArgs.split(' ')[0] == 'append'){
            let rdmName = rdm.Tid(10, 2) + '.js';
            if(node.fs.statSync(path).isFile()){
                throw new Error('append模式下需要提供文件夹的路径');
            }else{
                node.fs.writeFileSync(node.path.join(path, rdmName), Wcode, function (err) {
                    if (err) throw err;
                    //如果有时间参数，则延时删除
                    if(Number(methodArgs.split(' ')[1]).isNaN() != true){
                        setTimeout(() => {
                            node.fs.unlinkSync(node.path.join(path, rdmName));
                        }, Number(methodArgs.split(' ')[1]));
                    }
                    callback(true);
                });
                if(methodArgs.split(' ')[2]){
                    let targetPath = methodArgs.split(' ')[2];
                    if(node.fs.statSync(targetPath).isFile()){
                        if(node.path.extname(targetPath) == '.html'){
                            let origin = node.fs.readFileSync(targetPath, 'utf8');
                            let changeContent = origin + `<script 
                            from='YANJER-MAIN/inlineCode()' 
                            src='${node.path.join(path, rdmName)}'></script>`;
                            node.fs.writeFileSync(targetPath, changeContent, 'utf8');
                        }
                    }
                }
            }
        }
    }


}


class yDate extends Date{
    constructor(date){
        super(date);
    }
    formatToDay(){
        let year = this.getFullYear();
        let month = this.getMonth() + 1;
        let day = this.getDate();
        if(month < 10){
            month = '0' + month;
        }
        if(day < 10){
            day = '0' + day;
        }
        return `${year}-${month}-${day}`;
    }        
}

{//测试功能

}





