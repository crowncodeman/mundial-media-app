import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from './Icon'

const ContactSocialLinks = () => {
  return (
    <div className="flex gap-8 items-center">
      <a
        href="#"
        className="text-neutral-500 transition-colors hover:text-neutral-400"
        aria-label="Facebook"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-neutral-500 transition-colors hover:text-neutral-400"
        aria-label="Twitter"
      >
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-neutral-500 transition-colors hover:text-neutral-400"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-neutral-500 transition-colors hover:text-neutral-400"
        aria-label="LinkedIn"
      >
        <LinkedIn className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-neutral-500 transition-colors hover:text-neutral-400"
        aria-label="YouTube"
      >
        <YouTube className="h-6 w-6" />
      </a>
    </div>
  )
}

export default ContactSocialLinks
