let querystring = {
    stringify(obj) {
        let str = ''
        // Object.keys(obj).forEach((item, index)=>{
        //    str+=item+'='+obj[item]+'&'
        // })
        for (let i in obj) {
            str += i + '=' + obj[i] + '&'
        }
        return str.slice(0, -1)
    },
    parse(str) {
        str.split('&')
        let o = {};
        for (let i = 0; i < arr.length; i++) {
            let t = arr[i].split('=')
            o[t[0]] = t[1]
        }
        return o
    }
}
console.log(process.env)
let domin = "http://localhost:9000";
export default {
    get(url, params) {
        let s = querystring.stringify(params);
        // console.log(s)
        // querystring.parse('foo=bar&baz=qux&baz=quux&corge=')
        if (url.indexOf("?") > -1) {
            url = url + "&" + s
        } else {
            url = url + "?" + s
        }
        return new Promise((resolve, reject) => {
            fetch(domin + url, {
                headers: {
                    "Content-Type": "application/json",
                    "token":getCookie("token")
                }
            })
                .then(body => body.json())
                .then(res => {
                    resolve(res)
                })
        })
    },
    post(url,params) {
        return new Promise((resolve, reject) => {
            fetch(domin+url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(params)
            })
            .then(body=>body.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
}