export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxa47e043cfeeb41f4",
    // 公众号appSecret
    appSecret: "4d4e45d8c83d5ea1aa2a6aace2fcb9c2",
    // 模板消息id
    templateId: "8ITAO65m82-g8X5Yp8E1D_3TVnDJ7FPCqjAmw_t-Q_c",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oEm1g59qhTNgD1IuWC2zFRsATgGE","oEm1g5-ciKqZdbMvtz6M9srj1_H4","oEm1g55fT_n1WFLUD_68tGSTDJyc"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "福建",
    // 所在城市
    city: "莆田",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "曾曾", "year": "1998", "date": "06-02", "type": 'new'},
      {"name": "哥哥", "year": "1996", "date": "01-07", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-09-03",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
