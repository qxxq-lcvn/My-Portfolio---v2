import Image from 'next/image'
import authorImage from '@/public/images/authors/vina00.jpg'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Intro() {
  const quote = `
    ### 1, 2, 3, I love myself!
  `

  return (
    <section className='pd-3 flex flex-row-reverse items-center gap-x-10 gap-y-4'>
      <div className='mt-2 flex-1 text-center md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Vina.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a junior software engineer student at CADT. I&#39;m passionate
          about developing impactful softwares, designing educational games and
          training AI models. I&#39;d love to work in any educational,
          psychological and criminalogical fields.
        </p>
        <p className='mt-5 text-input'>
          <MDXRemote source={quote} />
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Vina'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
