```bash
$ time node getList.js
{
  status: 0,
  message: 'success',
  data: [
    {
      id: '094f41db-763c-4f56-9f9f-c9485f76f3dc',
      age: 22,
      username: 'hoge'
    },
    {
      id: '17bbe587-af6a-4d40-bf9a-c91229adcc2a',
      age: 32,
      username: 'popo'
    },
    { id: 'aaa', age: 21, name: 'sato' },
    { id: 'bbb', age: 18, name: 'suzuki' },
    { id: 'ccc', age: 20, name: 'tanaka' },
    { id: 'ddd', age: 17, name: 'takahashi' },
    { id: 'eee', age: 25, name: 'ito' }
  ]
}
^C

real    0m1.843s
user    0m0.248s
sys     0m0.032s
```
