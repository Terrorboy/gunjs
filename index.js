gun = (Gun = require('gun'))({ web: require('http').createServer(Gun.serve(__dirname)).listen(3000) })
