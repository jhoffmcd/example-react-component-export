import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'es'
    },
    external: [
        'react'
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        jsx({ factory: 'React.createElement' })
    ],
};
