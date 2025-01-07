import { getProjects } from '@/lib/projects'
import Link from 'next/link'
import Projects from './projects'
import { FaArrowRight } from 'react-icons/fa'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='p-12'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
        >
          <FaArrowRight />
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}
