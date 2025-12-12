//1
function printBooks(books){
    books.forEach ( books => {
        console.log(`『${books.name}』『${books.author}』`)
    })
}

books = [
    { name: 'JavaScript入門', author: '山田太郎' },
    { name: 'JavaScriptの絵本', author: '山田次郎' }
]
printBooks(books)


//2
let users = [
    {
      username: '山田',
      permissions: {
        canRead: true,
        canWrite: true,
        canDelete: false
      }
    },
    {
      username: '佐藤',
      permissions: {
        canRead: false,
        canWrite: true,
        canDelete: false
      }
    },
    // ユーザーを追加してください
  ];
  function checkPermission(username, permission) {
    const user = users.find(u => u.username === username )
      if(!user) return false;
    return Boolean (user.permissions[permission])
    // 関数を完成させてください
  }

console.log(checkPermission('山田', 'canWrite'));  // true
console.log(checkPermission('山田', 'canDelete')); // false
console.log(checkPermission('佐藤', 'canRead'));   // false


