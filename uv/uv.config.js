self.__uv$config = {
    prefix: '/service/',
    bare: 'https://vercel.com/new/clone?repositoryurl=https://github.com/dragon731012/DM-unbl0cker-bare-server',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
