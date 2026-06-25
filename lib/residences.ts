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
    tagline: 'Warm, light-filled rooms steps from the park.',
    location: 'Sibu Town Centre',
    image: '/images/parkway.png',
    facilities: ['Fully Furnished', 'Private Bath', 'High-Speed Wi-Fi'],
  },
  {
    id: 'kingsway',
    name: 'Kingsway',
    tagline: 'Sophisticated studios with skyline views.',
    location: 'Jln Tunku Abdul Rahman',
    image: '/images/kingsway.png',
    facilities: ['Fully Furnished', 'City View', 'Smart Lock'],
  },
  {
    id: 'norway',
    name: 'Norway',
    tagline: 'Bright Scandinavian calm for focused living.',
    location: 'Sibu Jaya',
    image: '/images/norway.png',
    facilities: ['Fully Furnished', 'Shared Lounge', 'Weekly Cleaning'],
  },
  {
    id: 'steinway',
    name: 'Steinway',
    tagline: 'Moody, hotel-grade interiors with brass accents.',
    location: 'Lanang Road',
    image: '/images/steinway.png',
    facilities: ['Fully Furnished', 'Private Bath', 'Covered Parking'],
  },
  {
    id: 'velway',
    name: 'Velway',
    tagline: 'Serene rooms surrounded by greenery.',
    location: 'Upper Lanang',
    image: '/images/velway.png',
    facilities: ['Fully Furnished', 'Private Bath', 'Garden Access'],
  },
  {
    id: 'opening-soon',
    name: 'Opening Soon',
    tagline: 'Our next residence is taking shape. Join the waitlist.',
    location: 'Sibu',
    image: '/images/lifestyle-1.png',
    facilities: ['Be the first to know'],
    comingSoon: true,
  },
]

export const navResidences = residences.filter((r) => !r.comingSoon)
