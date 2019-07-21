const {Quotes,Authors} = require('../server/db/models')
const db = require('../server/db')

const quotes = [
  {
    authorId:2,
    quote:'All is well'
  },
  {
    authorId:1,
    quote:'where there is a will there is a way'
  },
  {
    authorId:3,
    quote:'Home sweet home',
  },
  {
    authorId:3,
    quote:'one plus one is two'
  },
  {
    authorId:4,
    quote:'No one knows who did this'
  }
]

const authors = [
  {
    author:'Anand'
  },
  {
    author:'Janavi'
  },
  {
    author:'Anannya'
  },
  {
    author:'Anonymous'
  }
]

const seed = async()=>{
  try {
    await db.sync({force:true})
    await Promise.all(authors.map(author=>{
      return Authors.create(author);
    }))
    await Promise.all(quotes.map(quote=>{
      return Quotes.create(quote);
    }))
    console.log('Seeding success!');
    db.close()

  } catch (error) {
    console.error('Oh noes! Something went wrong!')
    console.error(error)
    db.close()
  }
}

seed();
