const {
    _env_
} = window;

const name = _env_ ? _env_.NAME : process.env.NAME || 'Gamez'
const title = _env_ ? _env_.TITLE : process.env.TITLE || 'Gamze'

export default {
    name, title,
}