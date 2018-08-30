# callbackfy
module to get a flow using callback from promises pattern


# usage 

```js
const withCallback = callby((param) => {
    assert(param === 'param');
    return Promise.resolve('testing');
});
withCallback('param', (err, res) => {
    assert(!err);
    assert(res === 'testing');
    done();
});

```

# API

callbackfy(Function) => Function