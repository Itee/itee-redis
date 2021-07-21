console.log('Itee.Database.Redis v1.0.3 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var RedisDriver = require('redis');
var iteeDatabase = require('itee-database');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var RedisDriver__namespace = /*#__PURE__*/_interopNamespace(RedisDriver);

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TRedisDatabase extends iteeDatabase.TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: RedisDriver__namespace
            }
        };

        super( _parameters );

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        var client = this._driver.createClient();

        client.on( 'error', function ( err ) {
            this.logger.error( err );
        } );

        client.set( 'string key', 'string val', this._driver.print );
        client.hset( 'hash key', 'hashtest 1', 'some value', this._driver.print );
        client.hset( [ 'hash key', 'hashtest 2', 'some other value' ], this._driver.print );

        client.hkeys( 'hash key', function ( err, replies ) {
            this.logger.log( replies.length + ' replies:' );

            replies.forEach( function ( reply, i ) {
                this.logger.log( '    ' + i + ': ' + reply );
            } );

            client.quit();
        } );

    }

    init () {
        super.init();

    }

    on ( /*eventName, callback*/ ) {}

}

exports.TRedisDatabase = TRedisDatabase;
//# sourceMappingURL=itee-redis.cjs.js.map
