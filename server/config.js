var fs = require("fs")
var path = require("path")

var baseConfig = JSON.parse(fs.readFileSync('../config.json', 'utf8'))

const common = {
    baseUrl: baseConfig.url,
    port: baseConfig.port,
    apiPrefix: 'api',
    fileDir: path.join((baseConfig.dir || path.join(__dirname, "..", ".."))), //上传文件的存放目录
    secret: baseConfig.secret || "d8AC195A-c3A1-9D8D-DAEc-B0C4C28F6F2a"
};

if (baseConfig.dbuser) {
    common['dbUser'] = baseConfig.dbuser
}
if (baseConfig.dbpass) {
    common['dbPassword'] = baseConfig.dbpass
}

export default common;
