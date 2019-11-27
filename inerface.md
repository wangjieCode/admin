# 值班系统接口

#### 检查数据查询接口

```js
返回格式：{
    type: 7s检查 | 教学检查 | 自习检查 | 寝室检查
    result: {
        类型： array<object>,
        {
            type: boolean | number | checkout
            title: 检查问题 eg：学生迟到人数
            value：检查问题对应的结果
            img: 拍照回传的照片 （可选）
            remarks: 备注（可选）
        }
    }
}
```
返回模板
```js
{
    type: string,
    result: [
        {
          type: 'boolean',
          title: "有用无用未区分，需要整理 ",
          img: string(可选),
          remarks: string(可选)
        },
        {
          type: 'number'
          title: "学生迟到人数",
          img: string(可选),
          remarks: string(可选)
        },
        {
          type: 'checkbox'
          title: "老师上课状态",
          img: string(可选),
          remarks: string(可选)
        },
    ]
}
```

