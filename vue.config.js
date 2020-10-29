// 可以设置webpack的配置

module.exports = {
    // 开发服务器
    devServer: {
        // 设置代理服务器
        proxy: {
            "^/api": {
                // target真正的 请求的酷狗地址
                target: "http://m.kugou.com",
                secure: false, // http https
                changeOrigin: true, // 是否做跨域请求： true 
                // http://m.kugou.com/?json=true'
                // axios.get('api?json=true')       //   axios.get('http://m.kugou.com/api/?json=true')
                pathRewrite: {
                    '^/api': ''
                }
            }
        }


    }


}