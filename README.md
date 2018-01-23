### Browser: 
```javascript
const localStorage = new StorageLocal()
if (localStorage.hasKey('user_id') === false) {
  localStorage.setData('user_id', ID)
}
console.log('ID', localStorage.getData('user_id'))
```

### CLI:
```javascript
const storage = new StorageSimple()
if (storage.hasKey('user_id') === false) {
  storage.setData('user_id', ID)
}
console.log('ID', storage.getData('user_id'))
```
