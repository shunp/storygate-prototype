const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: `env/.${process.env.BRANCH === 'master' ? 'master' : 'master'}` })
dotenv.config({ path: `env/.secrets` })

module.exports = {
  siteMetadata: {
    title: 'gatsby-three-ts-plus',
    description: '3D web starter kit with Three.js and TypeScript.',
    keywords: 'three.js, typescript, gatsbyjs, gatsby, emotion, tailwindcss',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Shumpei Koike',
      url: 'https://twitter.com/shunpei42ba_'
    },
    lang: 'en'
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-three-ts-plus.netlify.app'
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'assets')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-postcss`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `StoryGate`,
        short_name: `StoryGate`,
        description: `You can create your gate to youself`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/sg_icon_trans.png`,
        cache_busting_mode: 'none'
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID
        }
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/persons/*`] }
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: JSON.parse(process.env.FIREBASE_CREDENTIAL),
        types: [
          {
            type: 'CommunityCaption',
            collection: 'v2/proto/communityCaptions',
            map: doc => ({
              name: doc.name,
              introduction: doc.introduction
            })
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.html': ['cache-control: public, max-age=0, must-revalidate'],
          '/page-data/app-data.json': ['cache-control: public, max-age=0, must-revalidate'],
          '/page-data/*': ['cache-control: public, max-age=0, must-revalidate'],
          '/icons/*': ['cache-control: public, max-age=31536000, immutable'],
          '/models/*': ['cache-control: public, max-age=31536000, immutable'],
          '/textures/*': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
          '/**/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/**/*.css': ['cache-control: public, max-age=31536000, immutable']
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false
      }
    }
  ]
}
