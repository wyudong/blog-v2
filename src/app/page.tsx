import { load } from 'outstatic/server'
import Layout from '../components/Layout'
import ContentGrid from '../components/ContentGrid'
import Header from '../components/Header'

export default async function Index() {
  const { allPosts } = await getData()

  return (
    <Layout>
      <div className="max-w-6xl mx-auto md:px-8 px-6">
        <Header />
        <div className="py-8 mb-4 home-hero-fade">
          <h1 className="text-6xl mb-8">Hi,</h1>
          <h2 className="text-4xl mb-6 leading-tight">I’m a full-stack engineer, solving your challenges with code.</h2>
          <h3 className="text-4xl mb-2 leading-tight font-light">Web development / Cross-platform apps / Server services / DevOps / Tools / ……</h3>
        </div>
        {allPosts.length > 0 && (
          <ContentGrid
            items={allPosts}
            collection="posts"
            priority
          />
        )}
      </div>
    </Layout>
  )
}

async function getData() {
  const db = await load()

  const allPosts = await db
    .find({ collection: 'posts' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'tags'
    ])
    .sort({ rank: 1, publishedAt: 1 })
    .toArray()

  return {
    allPosts,
  }
}
