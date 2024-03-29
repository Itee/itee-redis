console.log('Itee.Database.Redis v1.0.3 - EsModule')
import * as RedisDriver from 'redis';
import { TAbstractDatabase } from 'itee-database';

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TRedisDatabase extends TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: RedisDriver
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

export { TRedisDatabase };
//# sourceMappingURL=itee-redis.esm.js.map
