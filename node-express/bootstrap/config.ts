import {sep} from 'path'

const root = __dirname + sep + '..' + sep
export default {
    path: {
        root: root,
        routes: root + 'routes' + sep,
        bootstrap: root + 'bootstrap' + sep
    }
}
