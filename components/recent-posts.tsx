import Link from 'next/link'
import Posts from './posts'
import { getPosts } from '@/lib/posts'
import { FaArrowRight } from 'react-icons/fa'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='p-12'>
      <div>
        <h2 className='title mb-12'>Recent posts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
        >
          <FaArrowRight />
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}
