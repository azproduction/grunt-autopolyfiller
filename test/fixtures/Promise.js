function timeout(time) {
    return new Promise(function (fulfill) {
        setTimeout(fulfill, time);
    });
}
