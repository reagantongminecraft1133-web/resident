export type AmenityGrid = {
  amenities: string[]
  property: string[]
  security: string[]
  management: string[]
  cleaning: string[]
  parking: string[]
}

export type FloorArea = {
  name: string
  image: string
}

export type FloorRoom = {
  model: string
  image: string
}

export type FloorPlan = {
  label: string
  commonAreas: FloorArea[]
  rooms: FloorRoom[]
}

export type ResidenceDetail = {
  audienceTags: string[]
  /** Core selling-point tags — champagne gold styling only */
  highlightTags: string[]
  priceFrom: number | null
  heroImages: string[]
  amenityGrid: AmenityGrid
  floors: FloorPlan[]
  mapImage: string
  mapCaption: string
}

const commonFirstFloorAreas = (image: string): FloorArea[] => [
  { name: 'Dining', image },
  { name: 'Kitchen', image },
  { name: 'Bathroom', image },
  { name: 'Corridor', image },
]

export const residenceDetails: Record<string, ResidenceDetail> = {
  parkway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['全家私', '独立卫浴'],
    priceFrom: 450,
    heroImages: ['/images/parkway.png', '/images/parkway.png', '/images/parkway.png'],
    amenityGrid: {
      amenities: ['Smart Lock', 'High-Speed Wi-Fi'],
      property: ['Front Yard', 'Laundry Room'],
      security: ['24/7 CCTV', 'Keycard Access'],
      management: ['Dedicated Residence Manager'],
      cleaning: ['Weekly Common Area Cleaning'],
      parking: ['Motorcycle Bay'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: commonFirstFloorAreas('/images/parkway.png'),
        rooms: [
          { model: 'STANDARD SINGLE', image: '/images/parkway.png' },
          { model: 'DELUXE QUEEN', image: '/images/parkway.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: commonFirstFloorAreas('/images/parkway.png'),
        rooms: [
          { model: 'PREMIUM SUITE', image: '/images/parkway.png' },
          { model: 'CORNER STUDIO', image: '/images/parkway.png' },
        ],
      },
    ],
    mapImage: '/images/parkway.png',
    mapCaption: 'Sibu Town Centre — steps from the park and daily conveniences.',
  },
  kingsway: {
    audienceTags: ['POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['全家私', 'City View'],
    priceFrom: 580,
    heroImages: ['/images/kingsway.png', '/images/kingsway.png'],
    amenityGrid: {
      amenities: ['Smart Lock', 'Fiber Wi-Fi'],
      property: ['Sky Lounge', 'Laundry Room'],
      security: ['CCTV Coverage', 'Secure Entry'],
      management: ['On-Site Concierge'],
      cleaning: ['Bi-Weekly Room Cleaning'],
      parking: ['Covered Car Park'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: commonFirstFloorAreas('/images/kingsway.png'),
        rooms: [
          { model: 'CITY VIEW SINGLE', image: '/images/kingsway.png' },
          { model: 'EXECUTIVE TWIN', image: '/images/kingsway.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: commonFirstFloorAreas('/images/kingsway.png'),
        rooms: [
          { model: 'PENTHOUSE STUDIO', image: '/images/kingsway.png' },
        ],
      },
    ],
    mapImage: '/images/kingsway.png',
    mapCaption: 'Jln Tunku Abdul Rahman — elevated living with skyline views.',
  },
  norway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE'],
    highlightTags: ['全家私', 'Weekly Cleaning'],
    priceFrom: 420,
    heroImages: ['/images/norway.png', '/images/norway.png'],
    amenityGrid: {
      amenities: ['Smart Lock', 'Mesh Wi-Fi'],
      property: ['Shared Lounge', 'Study Nook'],
      security: ['Perimeter CCTV', 'Night Patrol'],
      management: ['Residence Host'],
      cleaning: ['Weekly Deep Clean'],
      parking: ['Bicycle Storage'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: commonFirstFloorAreas('/images/norway.png'),
        rooms: [
          { model: 'SCANDI SINGLE', image: '/images/norway.png' },
          { model: 'BRIGHT DOUBLE', image: '/images/norway.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: commonFirstFloorAreas('/images/norway.png'),
        rooms: [{ model: 'GARDEN FACING', image: '/images/norway.png' }],
      },
    ],
    mapImage: '/images/norway.png',
    mapCaption: 'Sibu Jaya — calm Scandinavian-inspired living environment.',
  },
  steinway: {
    audienceTags: ['WORKING ADULT', 'POSTGRADUATE'],
    highlightTags: ['独立卫浴', 'Covered Parking'],
    priceFrom: 650,
    heroImages: ['/images/steinway.png', '/images/steinway.png', '/images/steinway.png'],
    amenityGrid: {
      amenities: ['Smart Lock', 'Premium Wi-Fi'],
      property: ['Brass-Accented Lobby', 'Laundry Room'],
      security: ['Smart CCTV', 'Biometric Entry'],
      management: ['Boutique Property Team'],
      cleaning: ['Weekly Housekeeping'],
      parking: ['Covered Parking'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: commonFirstFloorAreas('/images/steinway.png'),
        rooms: [
          { model: 'HOTEL GRADE SINGLE', image: '/images/steinway.png' },
          { model: 'MOODY SUITE', image: '/images/steinway.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: commonFirstFloorAreas('/images/steinway.png'),
        rooms: [{ model: 'SIGNATURE CORNER', image: '/images/steinway.png' }],
      },
    ],
    mapImage: '/images/steinway.png',
    mapCaption: 'Lanang Road — hotel-grade interiors with refined brass accents.',
  },
  velway: {
    audienceTags: ['UNDERGRADUATE', 'WORKING ADULT'],
    highlightTags: ['全家私', '独立卫浴'],
    priceFrom: 480,
    heroImages: ['/images/velway.png', '/images/velway.png'],
    amenityGrid: {
      amenities: ['Smart Lock', 'High-Speed Wi-Fi'],
      property: ['Garden Terrace', 'Laundry Room'],
      security: ['CCTV', 'Secure Gate'],
      management: ['Residence Care Team'],
      cleaning: ['Weekly Common Cleaning'],
      parking: ['Open Parking'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: commonFirstFloorAreas('/images/velway.png'),
        rooms: [
          { model: 'GREEN VIEW SINGLE', image: '/images/velway.png' },
          { model: 'SERENE DOUBLE', image: '/images/velway.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: commonFirstFloorAreas('/images/velway.png'),
        rooms: [{ model: 'CANOPY SUITE', image: '/images/velway.png' }],
      },
    ],
    mapImage: '/images/velway.png',
    mapCaption: 'Upper Lanang — serene rooms surrounded by lush greenery.',
  },
  'opening-soon': {
    audienceTags: ['COMING SOON'],
    highlightTags: [],
    priceFrom: null,
    heroImages: ['/images/lifestyle-1.png'],
    amenityGrid: {
      amenities: ['To Be Announced'],
      property: ['To Be Announced'],
      security: ['To Be Announced'],
      management: ['To Be Announced'],
      cleaning: ['To Be Announced'],
      parking: ['To Be Announced'],
    },
    floors: [],
    mapImage: '/images/lifestyle-1.png',
    mapCaption: 'A new residence is taking shape in Sibu. Join the waitlist.',
  },
}

export function getResidenceDetail(id: string): ResidenceDetail {
  return (
    residenceDetails[id] ?? {
      audienceTags: ['WORKING ADULT'],
      highlightTags: ['全家私'],
      priceFrom: null,
      heroImages: ['/placeholder.svg'],
      amenityGrid: {
        amenities: ['Smart Lock', 'Wi-Fi'],
        property: ['Common Areas'],
        security: ['CCTV'],
        management: ['On-Site Team'],
        cleaning: ['Scheduled Cleaning'],
        parking: ['Available'],
      },
      floors: [],
      mapImage: '/placeholder.svg',
      mapCaption: 'Sibu, Sarawak',
    }
  )
}
