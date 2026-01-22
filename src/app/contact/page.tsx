import ContactForm from '@/components/ContactForm'
import ContactPageHeading from '@/components/ContactPageHeading'
import ContactSocialLinks from '@/components/ContactSocialLinks'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className={cn(container, 'px-6 py-24 lg:py-32')}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left column - Heading and Social Links */}
          <div>
            <ContactPageHeading />
            {/* Social links positioned after heading on mobile, and on desktop */}
            <div className="mt-10">
              <ContactSocialLinks />
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
