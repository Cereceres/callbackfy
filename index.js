module.exports = (promise) => (...args) => {
    const cb = args.pop();
    const p = promise(...args);

    if (typeof cb !== 'function') return p;

    p.then((res) => cb(null, res)).catch(cb);
};
