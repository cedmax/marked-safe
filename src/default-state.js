
const defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export const presets = {
  brexit: {
    event: 'Brexit',
    category: 'Politics',
    date: '29th March 2017, 12.30pm',
    imageEvent: 'assets/presets/brexit.jpg'
  },
  trump: {
    event: 'Trump Election',
    category: 'Politics',
    date: '20th January 2017, 12.00pm',
    imageEvent: 'assets/presets/trump.jpg'
  },
  lit: {
    event: 'Lost in Translation',
    category: 'TV',
    date: '12th September 2003',
    imageEvent: 'assets/presets/lit.jpg'
  },
  lost: {
    event: 'Lost series finale',
    category: 'TV',
    date: '23rd May 2010, 9pm',
    imageEvent: 'assets/presets/lost.jpg'
  },
  psg: {
    event: 'La Remuntada',
    category: 'Football',
    date: '8th March 2017, 7:45pm',
    imageEvent: 'assets/presets/psg.jpg'
  },
  mineirazo: {
    event: 'Mineirazo',
    category: 'Football',
    date: '8th July 2014, 5pm',
    imageEvent: 'assets/presets/mineirazo.jpg'
  },
  toscani: {
    event: 'Toscani che parlano',
    category: 'Italy',
    date: '\'ho:stantemente',
    imageEvent: 'assets/presets/toscani.jpg'
  }
}
export default Object.assign({}, presets.brexit, { imageYou: defaultImage, name: 'Your Name' })


