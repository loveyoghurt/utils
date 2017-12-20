export default{
  name: 'utils',
  jsonp: (url)=>{
    return new Promise(function(reslove, reject){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url + "?callback=cb";
      document.getElementsByTagName('head')[0].appendChild(script);

      window.cb=function(param){
        // console.log(param);
        resolve(param)
      }
    })
  },
  /**
   * 设置cookie
   * @param name 要设置的属性名
   * @param value 属性值
   * @param expiredays 过期时间，单位天
     */
  setCookie: function(name,value,expiredays){
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=name+ "=" +encodeURI(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
  },
  /**
   * 获取cookie
   * @param name要获取的属性名
   * @returns {*}
     */
  getCookie: function(name){
    var c_start = -1;
    var c_end = -1;
    if (document.cookie.length>0){
      c_start=document.cookie.indexOf(name + "=")
      if (c_start!=-1){
        c_start=c_start + name.length+1
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return decodeURI(document.cookie.substring(c_start,c_end))
      }
    }
    return ""
  },
  /**
   * 删除cookie
   * @param name
     */
  delCookie: function (name) {
    document.cookie = name + '=;' + (new Date(0)).toGMTString();
  },
  /**
   * 不够位数，前面补0
   * @param num 原数字
   * @param n 需要的位数
   * @returns {*}
     */
  prefixInteger: function(num, n) {
    if(!n){
      n = 2;
    }
    return (Array(n).join(0) + num).slice(-n);
  },

}
