import jsonp from 'jsonp'
export default class Axios {
    static jsonp (options) {
        return new Promise((resovle,reject)=>{
            jsonp(options.url,{
                param:'callback'
            },function (err,response) {
                if(err) {
                    reject(response.message);
                } else {
                    resovle(response.results[0].weather_data[0])
                }
            })
        })
    }
}
