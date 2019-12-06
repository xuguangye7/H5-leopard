const pg = require('pg');

const pgConfig = {
    user: 'ningyuan',           // 数据库用户名
    database: 'sqlmath',       // 数据库
    password: 'ningyuan123',       // 数据库密码
    // host: '127.0.0.1',      // 数据库所在IP
    port: '5432'                // 连接端口
};
const pool = new pg.Pool(pgConfig);

module.exports = pool;

// function connectPg() {
//     return new Promise((resolve, reject) => {
//         const pgConfig = {
//             user: 'ningyuan',           // 数据库用户名
//             database: 'system',       // 数据库
//             password: 'ningyuan123',       // 数据库密码
//             // host: '127.0.0.1',      // 数据库所在IP
//             port: '5432'                // 连接端口
//         };
//         const pool = new pg.Pool(pgConfig);
//         pool.connect(function (error, client, done) {
//             if (error) {
//                 reject(error);
//             }
//             let sqlStr = 'SELECT * FROM manager';
//             client.query(sqlStr, [], function (err, response) {
//                 done();
//                 if (err) {
//                 reject(err);
//                 } else {
//                     resolve({
//                         state:200,
//                         data:response.rows
//                     });
//                 }
//             })
//         })
//     })
// }

// module.exports = {
//     connectPg
// }