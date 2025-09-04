'use client'

import { useState } from 'react'
import { ArrowUpRight } from './Icon'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Radio } from './Radio'
import { Select } from './Select'
import { TextArea } from './TextArea'

const topicOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'advertiser', label: 'Advertiser Solutions' },
  { value: 'publisher', label: 'Publisher Solutions' },
  { value: 'cadmus', label: 'CadmusAI' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'support', label: 'Technical Support' },
]

const roleOptions = [
  { value: 'designer', label: 'I am a product designer.' },
  { value: 'researcher', label: 'I am a UX researcher.' },
  { value: 'developer', label: 'I am a front-end developer.' },
  { value: 'marketer', label: 'I am a marketer.' },
  { value: 'executive', label: 'I am an executive.' },
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    role: '',
    message: '',
    acceptPrivacy: false,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, acceptPrivacy: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-3xl">
      {/* First Row - First Name and Last Name */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">
        <Input
          label={
            <>
              First name <span className="text-primary-500">*</span>
            </>
          }
          name="firstName"
          placeholder="John"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <Input
          label={
            <>
              Last name <span className="text-primary-500">*</span>
            </>
          }
          name="lastName"
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Second Row - Email and Phone */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">
        <Input
          label={
            <>
              email <span className="text-primary-500">*</span>
            </>
          }
          type="email"
          name="email"
          placeholder="mail@company.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          label={
            <>
              phone <span className="text-primary-500">*</span>
            </>
          }
          type="tel"
          name="phone"
          placeholder="+1 555 5555 555"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Topic Select */}
      <Select
        label={
          <>
            Choose a topic <span className="text-primary-500">*</span>
          </>
        }
        options={topicOptions}
        value={formData.topic}
        onChange={handleSelectChange('topic')}
        placeholder="Select"
      />

      {/* Role Radio Buttons - Two Column Layout */}
      <fieldset className="space-y-6">
        <legend className="block font-poppins text-sm text-neutral-500 uppercase tracking-wider">
          Which best describes you? <span className="text-primary-500">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-8">
          {roleOptions.map((option) => (
            <Radio
              key={option.value}
              name="role"
              value={option.value}
              label={option.label}
              checked={formData.role === option.value}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, role: e.target.value }))
              }
            />
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <TextArea
        label="Message"
        name="message"
        placeholder="Write here"
        value={formData.message}
        onChange={handleInputChange}
        rows={6}
      />

      {/* Privacy Policy Checkbox */}
      <Checkbox
        checked={formData.acceptPrivacy}
        onChange={handleCheckboxChange}
        label={
          <span className="font-poppins text-sm text-neutral-500">
            I have read and accept the{' '}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
          </span>
        }
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="secondary"
        trailingIcon={<ArrowUpRight className="w-4 h-4" />}
        disabled={!formData.acceptPrivacy}
      >
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
