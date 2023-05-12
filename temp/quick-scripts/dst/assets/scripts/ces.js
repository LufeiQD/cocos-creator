
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ces.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ffd6zELMlC6IYF50XAbMRe', 'ces');
// scripts/ces.ts

// # 导入必要的库和模块
// import openai
// import requests
// import json
// # 设置OpenAI API密钥
// openai.api_key = "YOUR_API_KEY"
// # 定义一个函数，用于向OpenAI API发送请求并返回响应
// def generate_response(prompt):
//     response = openai.Completion.create(
//         engine="davinci",
//         prompt=prompt,
//         max_tokens=1024,
//         n=1,
//         stop=None,
//         temperature=0.5,
//     )
//     return response.choices[0].text.strip()
// # 定义一个函数，用于向图灵机器人API发送请求并返回响应
// def get_tuling_response(prompt):
//     url = "http://openapi.tuling123.com/openapi/api/v2"
//     data = {
//         "reqType": 0,
//         "perception": {
//             "inputText": {
//                 "text": prompt
//             }
//         },
//         "userInfo": {
//             "apiKey": "YOUR_API_KEY",
//             "userId": "123456"
//         }
//     }
//     headers = {
//         "Content-Type": "application/json"
//     }
//     response = requests.post(url, data=json.dumps(data), headers=headers)
//     return response.json()["results"][0]["values"]["text"]
// # 定义一个函数，用于启动聊天程序
// def start_chat():
//     print("欢迎使用ChatGPT4.0！")
//     while True:
//         prompt = input("你：")
//         if prompt == "退出":
//             print("ChatGPT4.0已退出。")
//             break
//         response = generate_response(prompt)
//         if response == "":
//             response = get_tuling_response(prompt)
//         print("ChatGPT4.0：" + response)
// # 启动聊天程序
// start_chat()

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFFZCxtQkFBbUI7QUFDbkIsa0NBQWtDO0FBRWxDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUiw4Q0FBOEM7QUFFOUMsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUNuQywwREFBMEQ7QUFDMUQsZUFBZTtBQUNmLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLFlBQVk7QUFDWixRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLDZDQUE2QztBQUM3QyxRQUFRO0FBQ1IsNEVBQTRFO0FBQzVFLDZEQUE2RDtBQUU3RCxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyw2QkFBNkI7QUFDN0IscURBQXFEO0FBQ3JELDBDQUEwQztBQUUxQyxXQUFXO0FBQ1gsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8vICMg5a+85YWl5b+F6KaB55qE5bqT5ZKM5qih5Z2XXHJcbi8vIGltcG9ydCBvcGVuYWlcclxuLy8gaW1wb3J0IHJlcXVlc3RzXHJcbi8vIGltcG9ydCBqc29uXHJcblxyXG4vLyAjIOiuvue9rk9wZW5BSSBBUEnlr4bpkqVcclxuLy8gb3BlbmFpLmFwaV9rZXkgPSBcIllPVVJfQVBJX0tFWVwiXHJcblxyXG4vLyAjIOWumuS5ieS4gOS4quWHveaVsO+8jOeUqOS6juWQkU9wZW5BSSBBUEnlj5HpgIHor7fmsYLlubbov5Tlm57lk43lupRcclxuLy8gZGVmIGdlbmVyYXRlX3Jlc3BvbnNlKHByb21wdCk6XHJcbi8vICAgICByZXNwb25zZSA9IG9wZW5haS5Db21wbGV0aW9uLmNyZWF0ZShcclxuLy8gICAgICAgICBlbmdpbmU9XCJkYXZpbmNpXCIsXHJcbi8vICAgICAgICAgcHJvbXB0PXByb21wdCxcclxuLy8gICAgICAgICBtYXhfdG9rZW5zPTEwMjQsXHJcbi8vICAgICAgICAgbj0xLFxyXG4vLyAgICAgICAgIHN0b3A9Tm9uZSxcclxuLy8gICAgICAgICB0ZW1wZXJhdHVyZT0wLjUsXHJcbi8vICAgICApXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuY2hvaWNlc1swXS50ZXh0LnN0cmlwKClcclxuXHJcbi8vICMg5a6a5LmJ5LiA5Liq5Ye95pWw77yM55So5LqO5ZCR5Zu+54G15py65Zmo5Lq6QVBJ5Y+R6YCB6K+35rGC5bm26L+U5Zue5ZON5bqUXHJcbi8vIGRlZiBnZXRfdHVsaW5nX3Jlc3BvbnNlKHByb21wdCk6XHJcbi8vICAgICB1cmwgPSBcImh0dHA6Ly9vcGVuYXBpLnR1bGluZzEyMy5jb20vb3BlbmFwaS9hcGkvdjJcIlxyXG4vLyAgICAgZGF0YSA9IHtcclxuLy8gICAgICAgICBcInJlcVR5cGVcIjogMCxcclxuLy8gICAgICAgICBcInBlcmNlcHRpb25cIjoge1xyXG4vLyAgICAgICAgICAgICBcImlucHV0VGV4dFwiOiB7XHJcbi8vICAgICAgICAgICAgICAgICBcInRleHRcIjogcHJvbXB0XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIFwidXNlckluZm9cIjoge1xyXG4vLyAgICAgICAgICAgICBcImFwaUtleVwiOiBcIllPVVJfQVBJX0tFWVwiLFxyXG4vLyAgICAgICAgICAgICBcInVzZXJJZFwiOiBcIjEyMzQ1NlwiXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaGVhZGVycyA9IHtcclxuLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVzcG9uc2UgPSByZXF1ZXN0cy5wb3N0KHVybCwgZGF0YT1qc29uLmR1bXBzKGRhdGEpLCBoZWFkZXJzPWhlYWRlcnMpXHJcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpW1wicmVzdWx0c1wiXVswXVtcInZhbHVlc1wiXVtcInRleHRcIl1cclxuXHJcbi8vICMg5a6a5LmJ5LiA5Liq5Ye95pWw77yM55So5LqO5ZCv5Yqo6IGK5aSp56iL5bqPXHJcbi8vIGRlZiBzdGFydF9jaGF0KCk6XHJcbi8vICAgICBwcmludChcIuasoui/juS9v+eUqENoYXRHUFQ0LjDvvIFcIilcclxuLy8gICAgIHdoaWxlIFRydWU6XHJcbi8vICAgICAgICAgcHJvbXB0ID0gaW5wdXQoXCLkvaDvvJpcIilcclxuLy8gICAgICAgICBpZiBwcm9tcHQgPT0gXCLpgIDlh7pcIjpcclxuLy8gICAgICAgICAgICAgcHJpbnQoXCJDaGF0R1BUNC4w5bey6YCA5Ye644CCXCIpXHJcbi8vICAgICAgICAgICAgIGJyZWFrXHJcbi8vICAgICAgICAgcmVzcG9uc2UgPSBnZW5lcmF0ZV9yZXNwb25zZShwcm9tcHQpXHJcbi8vICAgICAgICAgaWYgcmVzcG9uc2UgPT0gXCJcIjpcclxuLy8gICAgICAgICAgICAgcmVzcG9uc2UgPSBnZXRfdHVsaW5nX3Jlc3BvbnNlKHByb21wdClcclxuLy8gICAgICAgICBwcmludChcIkNoYXRHUFQ0LjDvvJpcIiArIHJlc3BvbnNlKVxyXG5cclxuLy8gIyDlkK/liqjogYrlpKnnqIvluo9cclxuLy8gc3RhcnRfY2hhdCgpXHJcblxyXG5cclxuXHJcbiJdfQ==