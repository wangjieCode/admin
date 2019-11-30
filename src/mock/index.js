import Mock from 'mockjs';
var Random = Mock.Random
Mock.mock('/test', 'post', {
  'data|10': [{
    'id': Random.integer(20, 100),
    "state|1-2": true,
    'type': Random.ctitle(),
    'date': Random.now("yyyy-MM-dd"),
    "address": "@county(true)",
  }]
});


Mock.mock('/7s', 'get', {
  'data': {
    'type': 'checkout',
    'title': '',
    "value|7": [{
      'value|1-2': false,
      'title': "老师睡觉"
    }],
  }
});

Mock.mock('/7s1', 'get', {
  'data|7': [{
    'type': 'boolean',
    'title': Random.ctitle(),
    "value|1-2": true 
  }]
});

Mock.mock('/getCheckOut', 'post', {
  'data:10': {
    type: "教学检查",
    state: false,
    address: "东教404",
    date: Random.now('2013-10-12')
  }
});


