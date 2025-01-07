import { JSX, SVGProps } from 'react'
import { FaFacebook, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'

const navigation = [
  {
    name: 'Facebook',
    href: process.env.FACEBOOK_URL,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <FaFacebook {...props} />
    )
  },
  {
    name: 'Telegram',
    href: process.env.TELEGRAM_URL,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <FaTelegram {...props} />
    )
  },
  {
    name: 'LinkedIn',
    href: process.env.LINKEDIN_URL,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <FaLinkedin {...props} />
    )
  },
  {
    name: 'GitHub',
    href: process.env.GITHUB_URL,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <FaGithub {...props} />
    )
  }
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} V!NA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
