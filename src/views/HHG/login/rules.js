export const rules={
    mobile:['mobile',{ rules: [{ required: true, message: '请输入正确的手机号码!',pattern:(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/)}] }],
    code:['code',{ rules: [{ required: true, message: '请输入正确的验证码!' }] }],
}
