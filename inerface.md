# 值班系统接口

> 公有必填字段：nodeType；1(7s检查) 2(教学检查) 3(自习检查) 4(寝室检查)

#### 未进行检查信息接口
请求类型： get
请求参数：nodeType 检查教师标识
成功返回格式：
```js
{
  type: 检查类型,
  teacher: 检查老师
  result:{
    查询结果
    {
      title：'班级',
      place: 上课地点，
      id： 唯一标识
    }
    。。。
  }
}
```
查询失败格式：

#### 已填写检查信息接口
请求类型：get
请求参数：nodeType 检查教师标识
成功返回格式：
```js
{
  type: '检查类型',
  teacher: 检查老师,
  result: {
    {
      id: .....唯一标识
      type: boolean | number | checkout
      title: 检查问题 eg：学生迟到人数
      value：检查问题对应的结果
      img: 拍照回传的照片 （可选）
      remarks: 备注（可选）
    }
    ...
  }
}
```
查询失败格式：
```js
{
  msg:'错误信息'
}
```

#### 检查反馈信息接口
请求类型：get
请求参数：
```js
{
  nodeType：检查类型  number
  teacher：检查教师标识 string
  feedback；反馈对象 array
  remarks：检查反馈备注 text
}
```

成功返回格式：

```js
{
  ok
}
```
查询失败格式：
```js
{
  msg:'错误信息'
}
```

#### 检查数据查询接口

请求方式：get
请求参数：nodeType 必填，检查教师标识

```js
返回格式：{
    type: 7s检查 | 教学检查 | 自习检查 | 寝室检查
    teacher：检查教师
    result: {
        类型： array<object>,
        {
            id: .....唯一标识
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
          id: .....
          type: 'boolean',
          title: "有用无用未区分，需要整理 ",
          img: string(可选),
          remarks: string(可选)
        },
        {
          id: .....
          type: 'number'
          title: "学生迟到人数",
          img: string(可选),
          remarks: string(可选)
        },
        {
          id: .....
          type: 'checkbox'
          title: "老师上课状态",
          img: string(可选),
          remarks: string(可选)
        },
    ]
}
```

#### 检查数据修改接口
请求方式：post
请求参数：
```js
{
  nodeType: 检查类型（必填）
  teacher： 检查教师标识
  id：修改数据对应的id
  newData：修改后数据 数据格式和原数据一样，只修改值
}
成功返回结果：{
  result：'ok',
}
失败返回结果：{
  msg：'错误信息'
}
```
