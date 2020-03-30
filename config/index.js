const config = {
  NODE_ENV: 'development',
  JWT_SECRET: 'verysecret',
  JWT_ALGO: 'HS256',
  JWT_EXPIRES: '14d',
  JWT_ISSUER: 'com.codaisseur.auth'
}

for(let key in config){
  process.env[key] = config[key]
}

