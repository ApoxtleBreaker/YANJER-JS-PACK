//NOTICE: This yml and yaml is different from traditional yml(YAML Ain't a Markup Language or Yet Another Markup Language)
// This YML and YMAL is a new type means Yanjer Markup Language.


let expamleYML = `
$Main-Name
>Key(Value)
//注释
>Key(Value)
>Key(Value)
>Key(
    More
    Lines
    Value
)
^Key(value)
`
//==>
let formatYAML = `
[
    'Main-Name',
    [
        ['key','value'],
        ['key','value'],
        ['key','value'],
        ['key','value'],
        ['key','More\nLines\nValue'],
        {'key':'value'}
    ]
]
`

const fs = require('fs');
const path = require('path');

function textFormat(text) {
    let lines = text.split('\n');
    let result = [];
    let mainName = '';
    let keyValue = {};
    let comment = false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.startsWith('//')) {
            continue;
        }
        if (line.startsWith('$')) {
            mainName = line.slice(1);
            result.push(mainName);
        } else if (line.startsWith('>')) {
            let key = line.slice(1, line.indexOf('('));
            let value = line.slice(line.indexOf('(') + 1, line.lastIndexOf(')'));
            if (comment) {
                keyValue[key] = keyValue[key] + '\n' + value;
            } else {
                keyValue[key] = value;
            }
        } else if (line.startsWith('^')) {
            let key = line.slice(1, line.indexOf('('));
            let value = line.slice(line.indexOf('(') + 1, line.lastIndexOf(')'));
            if (comment) {
                keyValue[key] = keyValue[key] + '\n' + value;
            } else {
                keyValue[key] = value;
            }
        } else if (line.startsWith('//')) {
            comment = true;
        } else {
            comment = false;
        }
    }
    result.push(keyValue);
    return result;
}

let args = process.argv.slice(2);
// console.log(args);
if(!args || args.length < 1){
    console.log('请输入文件路径');
    return;
}else if(args.includes('-h') || args.includes('--help')){
    console.log(
        `=====YanjerPack-YML.js=====\n
        args list:\n
        -h, --help: 显示帮助信息\n
        -f, --file: 输入文件路径(必须)\n
        -o, --output: 输出文件路径(默认: 输入文件路径/fileName.json)\n
        `
    )
    return;
}
// if(!args.includes('-f') || !args.includes('--file')){
//     console.log('请输入文件路径');
//     return;
// }
let filePath = path.resolve(args[args.indexOf('-f') + 1]);
let fileContent = fs.readFileSync(filePath, 'utf8');
let formatContent = textFormat(fileContent);
console.log(formatContent);

let outputPath;
if(args.includes('-o') || args.includes('--output')){
    outputPath = path.resolve(args[args.indexOf('-o') + 1]);
    fs.writeFileSync(outputPath, JSON.stringify(formatContent, null, 4), 'utf8');
}else{
    outputPath = path.resolve(path.dirname(filePath) + '/' + path.basename(filePath, '.yml') + '.txt');
    fs.writeFileSync(outputPath, JSON.stringify(formatContent, null, 4), 'utf8');
}
console.log('文件已写入:', outputPath);
//test: node YanjerPack-YML.js -f test.yml -o test.txtj
