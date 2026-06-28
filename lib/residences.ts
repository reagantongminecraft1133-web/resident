export type Residence = {
  id: string
  name: string
  tagline: string
  location: string
  image: string
  facilities: string[]
  comingSoon?: boolean
}

export const residences: Residence[] = [
  {
    id: 'parkway',
    name: 'Parkway',
    tagline: '',
    location: 'Jalan Wawasan',
    image: '/images/Parkway Residence.jpeg',
    facilities: ['Fully Furnished', 'Smart Lock'],
  },
  {
    id: 'kingsway',
    name: 'Kingsway',
    tagline: '',
    location: 'Jalan Wawasan',
    image: '/images/Kingsway Residence.png',
    facilities: ['Fully Furnished', 'Smart Lock'],
  },
  {
    id: 'norway',
    name: 'Norway',
    tagline: '',
    location: 'Unicity',
    image: '/images/Norway Residence.png',
    facilities: ['Fully Furnished', 'Smart Lock'],
  },
  {
    id: 'steinway',
    name: 'Steinway',
    tagline: '',
    location: 'Jalan Wawasan',
    image: '/images/Steinway Residence.jpg',
    facilities: ['Fully Furnished', 'Smart Lock'],
  },
  {
    id: 'velway',
    name: 'Velway',
    tagline: '',
    location: 'Unicity',
    image: '/images/Velway Residence.png',
    facilities: ['Fully Furnished', 'Smart Lock'],
  },
  {
    id: 'opening-soon',
    name: 'Opening Soon',
    tagline: 'Our next residence is taking shape. Join the waitlist.',
    location: 'Sibu',
    image: '/images/The Room Residence Sibu Logo .png',
    facilities: ['Be the first to know'],
    comingSoon: true,
  },
]

export const navResidences = residences.filter((r) => !r.comingSoon)
