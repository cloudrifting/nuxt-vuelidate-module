const path = require('path')

export default function() {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'generated.plugin.vuelidate.js',
  })
}
