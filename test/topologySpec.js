import topology from '../topology'
import geojson from './network.json'
import tap from 'tap';

tap.test('can create topology', function(t) {
    var topo = topology(geojson);
    t.ok(topo);
    t.ok(topo.vertices);
    t.ok(topo.edges);

    t.equal(Object.keys(topo.vertices).length, 889);

    t.end();
});
