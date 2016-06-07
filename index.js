var client = require('scp2');

module.exports = function(options) {
    options || (options = {});

    if(!options.server || !options.path) {
        throw new Error('options.server && options.path are required!');
    }

    return function() {
        var staticPath = this.fs.pathResolve(options.path);

        bone.log('scp', 'start sync '+options.path+' to server: '+options.server.host+':'+options.server.path);

        client.scp(staticPath, options.server, function(err) {
            if(err) {
                throw err;
            } else {
                bone.log.info('scp','upload '+options.path+' success!');
            }
        });
    };
};