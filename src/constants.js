'use strict'

const { join } = require('path')

const dir = process.env.YOUTUBE_DL_DIR || join(__dirname, '..', 'bin')
const unix = (process.env.YOUTUBE_DL_PLATFORM || process.platform) !== 'win32'
const fn = process.env.YOUTUBE_DL_FILENAME || `youtube-dl${unix ? '' : '.exe'}`
const path = join(dir, fn)

module.exports = {
  dir,
  host:
    process.env.YOUTUBE_DL_HOST ||
    'https://api.github.com/repos/ytdl-org/youtube-dl/releases?per_page=1',
  unix,
  fn,
  path
}
