// ===========================================================================
// DO NOT EDIT THIS FILE MANUALLY!
//
// The contents have been added automatically.
// See: scripts/generate-projects.ts for more information
// ===========================================================================

import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    name: 'MantisSwap',
    tagline: 'Next Generation Stableswap',
    description:
      'Mantissa Finance is a new decentralised finance (DeFi) primitive on the Polygon blockchain that aims to redefine the trading experience for pegged assets./nMantissa introduces MantisSwap, a single-sided AMM for trading pegged assets that is designed to maximise capital efficiency and minimise principal losses for liquidity providers. Through its innovative design, MantisSwap will push the boundaries of traditional AMMs with greater capital efficiency, lower trading fees, principal protection for liquidity providers and a super intuitive UI to fuel DeFi growth and adoption./n/nMantisSwap will allow seamless trades of different stablecoins and pegged assets while offering lower slippage, cheaper gas and safer trades. With the majority of liquidity within a DeFi ecosystem flowing through its native DEX, we believe our ecosystem-centric DEX will become the liquidity hub on Polygon and the premier destination for trading pegged assets./n/nMantisSwap have partnered with API3 to get the latest price feeds for all the tokens in our protocol. These prices will always be consulted before a swap occurs to predict depeg risks.',
    status: 'inactive',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201166_logo.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201167_banner.jpg',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201195_screenshot1.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201247_screenshot2.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691435201259_screenshot3.png',
      ],
    },
    categories: ['defi', 'dex'],
    productType: 'datafeed',
    chains: ['1101'],
    proxies: {
      '1101': [
        {
          proxyType: 'dapi',
          feedName: 'USDC/USD',
          dapiNameHash: '0x228ffa116d7cb33d822dc4f1ba986ee7ecfa6b6b570aab9663f30f560df7f880',
          proxyAddress: '0x8DF7d919Fe9e866259BB4D135922c5Bd96AF6A27',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'USDT/USD',
          dapiNameHash: '0x48ddbf100a94d2af942f3f3b525fe385c1ac3c8020c9d90aecd487f72adcaf3d',
          proxyAddress: '0xF63Fa6EA00678F435Ae3e845541EBb2Db0a1e8fF',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'DAI/USD',
          dapiNameHash: '0x9eaf6889d5df94e769098eb3119c7ad9a8f301b58296c06cb75b2859c6f35557',
          proxyAddress: '0x6538D9c4b12b5E5E209917D29C097465Ba8EFA02',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://mantissa.finance/',
      dapp: 'https://app.mantissa.finance/',
      docs: 'https://docs.mantissa.finance/',
      explorer: 'https://zkevm.polygonscan.com/address/0x12d41b6DF938C739F00c392575e3FD9292d98215',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/MantisSwap' },
        { label: 'discord', url: 'https://t.co/duyLdUi3fj' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Mean Finance',
    tagline: 'Providing you the best tools to invest, diversify and grow',
    description:
      'Mean Finance aims to be the go-to platform for decentralized investment tools, fostering responsible and diversified exposure to the emerging crypto asset thesis. We prioritize diversification and prudence in our approach, simplifying users investment journey into the future of finance.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700045302_PFP%20%283%29.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700045302_Portada%20con%20logo.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700047068_photo_2023-08-10_16-20-11.jpg',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700047075_f7cfa71f71e3b6adecbf1f1104759e4d.jpg',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691700047152_06883394a3a5b56c55965d778db2e02c.jpg',
      ],
    },
    categories: ['defi', 'dex', 'infrastructure'],
    productType: 'datafeed',
    chains: ['42161', '10', '137', '56', '1', '100'],
    proxies: {
      '137': [
        {
          proxyType: 'dapi',
          feedName: 'LDO/USD',
          dapiNameHash: '0x4495bcb7091356505efac7d5326d6565b528bc2a3ec4ecb6543ff13ee2334dc4',
          proxyAddress: '0x774F0C833ceaacA9b472771FfBE3ada4d6805709',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'STG/USD',
          dapiNameHash: '0xfacb6a0dc0f94e3844f1559bc9215b88ffb2e91503135ae9eb26497e93041be7',
          proxyAddress: '0x7972cFBa470eF69062A3C58d9BfAfe68c09Fb4F0',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://mean.finance',
      dapp: 'https://mean.finance',
      docs: 'https://docs.mean.finance',
      explorer: 'https://etherscan.io/address/0xA5AdC5484f9997fBF7D405b9AA62A7d88883C345',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/mean_fi' },
        { label: 'discord', url: 'https://discord.mean.finance' },
        { label: 'github', url: 'https://github.com/mean-finance' },
      ],
    },
    year: 2021,
  },
  {
    name: 'Shrike Perps',
    tagline: 'Maximize your gains with 50x leverage on Shrike!',
    description:
      'Trade for maximum gains on zkEVM with Shrike! $3,000 up for grabs in our contests, so make sure you get on the leaderboard! Or provide liquidity with SHLP and win like the house always does through real ETH rewards from trading fees!',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/shrike.7fd3441e.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691697416706_dovish-branded-cover.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691697416714_shrikesc2.png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1691697416743_shrikeSC.png',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['1101'],
    proxies: {
      '1101': [
        {
          proxyType: 'datafeedId',
          feedName: 'ETH/USD',
          datafeedId: '0x4385954e058fbe6b6a744f32a4f89d67aad099f8fb8b23e7ea8dd366ae88151d',
          proxyAddress: '0x42e7638365215B18E969c7c71cAfd98fc035f3dc',
          oev: { enabled: true, beneficiary: '0xa5964a9CF2f8ADDF72b3e9Dd417b4E950Cd34e99' },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'BTC/USD',
          datafeedId: '0xd888b92f9d71afedd0a012622c0d1d5368fc0dc0ff1d30bb16266afcd49c2c17',
          proxyAddress: '0xDF164A1A1f51460953B3839E9e5d7EdceE0EB0D9',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'MATIC/USD',
          datafeedId: '0x7a32de86e03383b758e3c7e00681b6c762e0cef235676a2593e4aef83c1b41b2',
          proxyAddress: '0x9d642fD27Ab7baa66Fba30BCBD67bd31ab5578d5',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'USDC/USD',
          datafeedId: '0x811b12b44adf2e6ad84dc3ec577cc6c0b15e76e400764139330ce3fc58043d26',
          proxyAddress: '0x2a87813e167D8365001C99Ee8C220500767E99f0',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://shrike.dovish.finance/',
      dapp: 'https://shrike.dovish.finance/',
      docs: 'https://dovish.gitbook.io/shrike/',
      explorer: 'https://zkevm.polygonscan.com/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/DovishFi' },
        { label: 'discord', url: 'https://discord.com/invite/Up2SMcfthg' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Tropykus finance',
    tagline: 'Earn interest and open fair credit lines for latinamericans.',
    description:
      'Tropykus enables users and companies to leverage their savings using ETH and USDC, generating passive interest. Additionally, it provides the opportunity to open credit lines for members or employees in an easy and secure way through an intuitive interface that guides both savvy users and beginners alike.',
    status: 'active',
    images: {
      logo: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607644_Logo%20Tropykus%20cuadrado.png',
      cover: 'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607644_Banner%20API3.png',
      screenshots: [
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607660_Captura%20de%20Pantalla%202023-08-11%20a%20la%28s%29%209.21.21%20a.m..png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035607887_Captura%20de%20Pantalla%202023-08-11%20a%20la%28s%29%209.28.11%20a.m..png',
        'https://ecosystem-website.s3.us-east-2.amazonaws.com/1692035608060_Captura%20de%20Pantalla%202023-08-11%20a%20la%28s%29%209.29.53%20a.m..png',
      ],
    },
    categories: ['defi'],
    productType: 'datafeed',
    chains: ['1101'],
    proxies: {
      '1101': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x26690F9f17FdC26D419371315bc17950a0FC90eD',
          oev: { enabled: false },
        },
        {
          proxyType: 'dapi',
          feedName: 'WBTC/USD',
          dapiNameHash: '0x788a83d3185172684a06bc2d96ea3e98728e0e87b759e866757989dcfe63b4f4',
          proxyAddress: '0x28Cac6604A8f2471E19c8863E8AfB163aB60186a',
          oev: { enabled: false },
        },
      ],
    },
    links: {
      website: 'https://tropykus.com/',
      dapp: 'https://zk.app.tropykus.com/',
      docs: 'https://github.com/Tropykus/protocol-rsk',
      explorer: 'https://zkevm.polygonscan.com/',
      socials: [
        { label: 'twitter', url: 'https://twitter.com/tropykus' },
        { label: 'telegram', url: 'https://t.me/tropykus' },
      ],
    },
    year: 2023,
  },
  {
    name: 'Quickswap-Perps',
    tagline: 'cutting-edge decentralized Perpetual Exchange on Polygon zkEVM',
    description:
      "QuickPerps is QuickSwap's decentralized Perpetual Exchange built on Polygon zkEVM, leveraging Polygon's newest and promising infrastructure to provide unparalleled security, powerful scalability, and much more.",
    status: 'active',
    chains: ['1101'],
    categories: ['defi', 'dex'],
    productType: 'datafeed',
    proxies: {
      '1101': [
        {
          proxyType: 'datafeedId',
          feedName: 'ETH/USD',
          datafeedId: '0x4385954e058fbe6b6a744f32a4f89d67aad099f8fb8b23e7ea8dd366ae88151d',
          proxyAddress: '0x94C10721Bc55E81E40E5Db92060335374F32546b',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'BTC/USD',
          datafeedId: '0xd888b92f9d71afedd0a012622c0d1d5368fc0dc0ff1d30bb16266afcd49c2c17',
          proxyAddress: '0xDF164A1A1f51460953B3839E9e5d7EdceE0EB0D9',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'MATIC/USD',
          datafeedId: '0x7a32de86e03383b758e3c7e00681b6c762e0cef235676a2593e4aef83c1b41b2',
          proxyAddress: '0x9d642fD27Ab7baa66Fba30BCBD67bd31ab5578d5',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'USDC/USD',
          datafeedId: '0x811b12b44adf2e6ad84dc3ec577cc6c0b15e76e400764139330ce3fc58043d26',
          proxyAddress: '0x2a87813e167D8365001C99Ee8C220500767E99f0',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'USDT/USD',
          datafeedId: '0xff96db9f5eaf10f5425e58ceb282308ab8099ef73c01bc3c6a094f84fa0aa53d',
          proxyAddress: '0x92860DD9335BE57c789CB95237Fd67f1c5B21c5a',
          oev: { enabled: false },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'DAI/USD',
          datafeedId: '0x07bd5ed37a946e4c54f1efb26f013245406fbf760ded5db962a9ce054570aa28',
          proxyAddress: '0x12102D07010c86fF8E7Ba6D48894c7B9039Db358',
          oev: { enabled: false },
        },
      ],
    },
    year: 2023,
    images: {
      logo: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F60594080-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FLyYNl56ITrQ2UqSmR7BQ%252Ficon%252F5hGnJPwDbseRBRVMsz9u%252FGroup%252025981.png%3Falt%3Dmedia%26token%3Decb076c5-0898-48f9-a284-fbb533f65c31',
      cover:
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FMXO3nwBjR8YjOZw3OMrd%2Fimage.png?alt=media&token=3db1e3e6-4d4b-4b92-8247-bd0bb94ba97f',
      screenshots: [
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FbZrkyTv9pwJMd2E9n0Hg%2FGroup%201321314307.png?alt=media&token=8d578c4d-36cc-4895-bdbf-4e2de91e9fa4',
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FhCg6BqBlbk7SsuwWWqeW%2FGroup%201321314307%20(2).png?alt=media&token=77d64f78-4c87-4284-a0ee-88cf83d06653',
        'https://60594080-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FLyYNl56ITrQ2UqSmR7BQ%2Fuploads%2FQOOpYdnw0JssURphHH8V%2Fimage.png?alt=media&token=c009b7a3-5efa-4b75-a7a5-00a85e672b51',
      ],
    },
    links: {
      dapp: 'https://perps.quickswap.exchange/',
      website: 'https://perps.quickswap.exchange/',
      docs: 'https://perps-docs.quickswap.exchange/',
      explorer: 'https://zkevm.polygonscan.com/address/0x99B31498B0a1Dae01fc3433e3Cb60F095340935C',
      socials: [
        { label: 'Reddit', url: 'https://www.reddit.com/r/QuickSwap/' },
        { label: 'Twitter', url: 'https://twitter.com/QuickswapDEX' },
        { label: 'Telegram', url: 'https://t.me/QuickSwapDEX' },
        { label: 'Youtube', url: 'https://www.youtube.com/channel/UCrPlF-DBwD-UzLFDzJ4Z5Fw' },
        { label: 'Discord', url: 'https://discord.com/invite/dSMd7AFH36' },
      ],
    },
  },
  {
    name: 'sample',
    tagline: 'sample tagline',
    description: 'sample description',
    status: 'inactive',
    chains: ['1', '137'],
    categories: ['defi'],
    productType: 'datafeed',
    proxies: {
      '1': [
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x',
          oev: { enabled: false },
        },
        { proxyType: 'datafeedId', feedName: 'ETH/USD', datafeedId: '0x', proxyAddress: '0x', oev: { enabled: false } },
        {
          proxyType: 'dapi',
          feedName: 'ETH/USD',
          dapiNameHash: '0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'ETH/USD',
          datafeedId: '0x',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
      ],
      '137': [
        {
          proxyType: 'dapi',
          feedName: 'BTC/USD',
          dapiNameHash: '0x4291cd9e354c309a63b4a41d0de370e9494d5d59a306af07636abaf68159e043',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
        {
          proxyType: 'datafeedId',
          feedName: 'BTC/USD',
          datafeedId: '0x',
          proxyAddress: '0x',
          oev: { enabled: true, beneficiary: '0x' },
        },
      ],
    },
    year: 2020,
    images: {
      logo: 'https://-.com/images/logo.png',
      cover: 'https://-.com/images/cover.png',
      screenshots: [
        'https://-.com/images/screenshot1.png',
        'https://-.com/images/screenshot2.png',
        'https://-.com/images/screenshot3.png',
      ],
    },
    links: {
      dapp: 'https://app.-.com/',
      website: 'https://-.com/',
      docs: 'https://docs.-.com/',
      explorer: 'https://etherscan.io/',
      socials: [
        { label: 'Reddit', url: 'https://www.reddit.com/r/-/' },
        { label: 'Twitter', url: 'https://twitter.com/-' },
        { label: 'Telegram', url: 'https://t.me/-' },
        { label: 'Youtube', url: 'https://www.youtube.com/channel/' },
        { label: 'Discord', url: 'https://discord.gg/' },
      ],
    },
  },
];
