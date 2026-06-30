export type AmenityGrid = {
  propertyType: string[]
  propertyLayout: string[]
  roomType: string[]
  occupancyType: string[]
  bathroomFacilities: string[]
  sharedAmenities: string[]
  deposit: string[]
  utilities: string[]
}

export type FloorArea = {
  name: string
  image: string
}

export type FloorRoom = {
  name: string  // 👈 你想叫它什么名字，前台就原封不动显示什么名字
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
  heroImages: string[]
  amenityGrid: AmenityGrid
  floors: FloorPlan[]
  mapImage: string
  mapCaption: string

  mapImageMobile?: string
  googleMapsUrl?: string // 真实 Google Map 外跳链接
  virtualTourUrl?: string // 360 全景嵌入链接（如 Kuula 或 Pannellum）
}


export const residenceDetails: Record<string, ResidenceDetail> = {
  parkway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['Fully Furnished'],
    heroImages: ['/images/parkway/1st floor/P1 - Room/P1C - Single Window.png'],
    // 🌟 完美对齐 8 大硬核租赁指标
    amenityGrid: {
      propertyType: ['Shoplot - Fully furnished hostel-style accommodation'],
      propertyLayout: ['First floor - 7 rooms', 'Second floor - 7 rooms'],
      
      roomType: [
        '5 Single Window',
        '2 Single Skylight',
        '4 Double Window',
        '3 Double Skylight'
      ],
      
      occupancyType: ['Mixed-gender Floors'],
      bathroomFacilities: ['2 Shared Toilets per Floor'],
      
      sharedAmenities: [
        'Fridge', 
        'Washing Machine', 
        'Microwave', 
        'Induction Cooker',
        'Shower Heater'
      ],
      
      deposit: ['One and a half month'],
      utilities: ['Wi-Fi & Water Included', 'Room Electricity Paid by Tenant'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas:[
          { name: 'Dining', image: '/images/parkway/1st floor/P1 - Common Space/P1 - Dining Room.png' },
          { name: 'Kitchen', image: '/images/parkway/1st floor/P1 - Common Space/P1 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/parkway/1st floor/P1 - Common Space/P1 - Bathroom.png' },
        ],
        rooms: [
          { name: 'Room P1A', image: '/images/parkway/1st floor/P1 - Room/P1A - Double Window.png' },
          { name: 'Room P1B', image: '/images/parkway/1st floor/P1 - Room/P1B - Single Window.png' },
          { name: 'Room P1C', image: '/images/parkway/1st floor/P1 - Room/P1C - Single Window.png' },
          { name: 'Room P1D', image: '/images/parkway/1st floor/P1 - Room/P1D - Single Room.png' },
          { name: 'Room P1E', image: '/images/parkway/1st floor/P1 - Room/P1E - Double Room.png' },
          { name: 'Room P1F', image: '/images/parkway/1st floor/P1 - Room/P1F - Single Window.png' },
          { name: 'Room P1G', image: '/images/parkway/1st floor/P1 - Room/P1G - Double Window.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: [
          { name: 'Dining', image: '/images/parkway/2nd floor/P2 - Common Space/P2 - Dining Area.png' },
          { name: 'Kitchen', image: '/images/parkway/2nd floor/P2 - Common Space/P2 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/parkway/2nd floor/P2 - Common Space/P2 - Bathroom.png' },
          { name: 'Wash Area', image: '/images/parkway/2nd floor/P2 - Common Space/P2 - Wash Area.png' },
          { name: 'Corridor', image: '/images/parkway/2nd floor/P2 - Common Space/P2 - Corridor.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room P2A', image: '/images/parkway/2nd floor/P2 - Room/P2A - Single Window.png' },
          { name: 'Room P2B', image: '/images/parkway/2nd floor/P2 - Room/P2B - Double Skylight.png' },
          { name: 'Room P2C', image: '/images/parkway/2nd floor/P2 - Room/P2C - Double Window.png' },
          { name: 'Room P2D', image: '/images/parkway/2nd floor/P2 - Room/P2D - Double Skylight.png' },
          { name: 'Room P2E', image: '/images/parkway/2nd floor/P2 - Room/P2E - Single Window.png' },
          { name: 'Room P2F', image: '/images/parkway/2nd floor/P2 - Room/P2F - Single Skylight.png' },
          { name: 'Room P2G', image: '/images/parkway/2nd floor/P2 - Room/P2G - Double Window.png' },
        ],
      },
    ],
    mapImage: '/images/map/parkwaymap.png',
    mapImageMobile: '/images/map/mobile/parkwaymap.png',
    mapCaption: 'Jalan Wawasan — with cafés, restaurants, and daily essentials just moments away.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=2.343477,%20111.835596',
    virtualTourUrl: ''
  },
  
  kingsway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['Fully Furnished'],
    heroImages: ['/images/kingsway/1st floor/K1 - Room/K1A - Single Window.png'],

    amenityGrid: {
      propertyType: ['Shoplot - Fully furnished hostel-style accommodation'],
      propertyLayout: ['First floor - 7 rooms', 'Second floor - 7 rooms'],
      
      roomType: [
        '9 Single Window',
        '2 Single Skylight',
        '4 Double Window',
        '1 Double Skylight'
      ],
      
      occupancyType: ['Mixed-gender Floors'],
      bathroomFacilities: ['2 Shared Toilets per Floor'],
      
      sharedAmenities: [
        'Fridge', 
        'Washing Machine', 
        'Microwave', 
        'Induction Cooker',
        'Shower Heater'
      ],
      
      deposit: ['One and a half month'],
      utilities: ['Wi-Fi & Water Included', 'Room Electricity Paid by Tenant'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: [
          { name: 'Dining', image: '/images/kingsway/1st floor/K1 - Common Space/K1 - Dining Area.png' },
          { name: 'Kitchen', image: '/images/kingsway/1st floor/K1 - Common Space/K1 - Kitchen.png' },
          { name: 'Foyer', image: '/images/kingsway/1st floor/K1 - Common Space/K1 - Foyer.png' },
          { name: 'Bathroom', image: '/images/kingsway/1st floor/K1 - Common Space/K1 - Bathroom.png' },
          { name: 'Corridor', image: '/images/kingsway/1st floor/K1 - Common Space/K1 - Corridor.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room K1A', image: '/images/kingsway/1st floor/K1 - Room/K1A - Single Window.png' },
          { name: 'Room K1B', image: '/images/kingsway/1st floor/K1 - Room/K1B - Single Window.png' },
          { name: 'Room K1C', image: '/images/kingsway/1st floor/K1 - Room/K1C - Double Skylight.png' },
          { name: 'Room K1D', image: '/images/kingsway/1st floor/K1 - Room/K1D - Single Window.png' },
          { name: 'Room K1E', image: '/images/kingsway/1st floor/K1 - Room/K1E - Single Skylight.png' },
          { name: 'Room K1F', image: '/images/kingsway/1st floor/K1 - Room/K1F - Single Window.png' },
          { name: 'Room K1G', image: '/images/kingsway/1st floor/K1 - Room/K1G - Single Window.png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: [
          { name: 'Dining', image: '/images/kingsway/2nd floor/K2 - Common Space/K2 - Dining Area.png' },
          { name: 'Kitchen', image: '/images/kingsway/2nd floor/K2 - Common Space/K2 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/kingsway/2nd floor/K2 - Common Space/K2 - Bathroom.png' },
          { name: 'Corridor', image: '/images/kingsway/2nd floor/K2 - Common Space/K2 - Corridor.png' },
          { name: 'Entrance', image: '/images/kingsway/2nd floor/K2 - Common Space/K2 - Entrance.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room K2A', image: '/images/kingsway/2nd floor/K2 - Room/K2A - Single Skylight.png' },
          { name: 'Room K2B', image: '/images/kingsway/2nd floor/K2 - Room/K2B - Single Window.png' },
          { name: 'Room K2C', image: '/images/kingsway/2nd floor/K2 - Room/K2C - Double Window.png' },
          { name: 'Room K2D', image: '/images/kingsway/2nd floor/K2 - Room/K2D - Single Window.png' },
          { name: 'Room K2E', image: '/images/kingsway/2nd floor/K2 - Room/K2E - Single Skylight.png' },
          { name: 'Room K2F', image: '/images/kingsway/2nd floor/K2 - Room/K2F - Double Window.png' },
          { name: 'Room K2G', image: '/images/kingsway/2nd floor/K2 - Room/K2G - Single Window.png' },
        ],
      },
    ],
    mapImage: '/images/map/kingswaymap.png',
    mapImageMobile: '/images/map/mobile/kingswaymap.png',
    mapCaption: 'Jalan Wawasan — with cafés, restaurants, and daily essentials just moments away.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=2.343695,%20111.835609',
    virtualTourUrl: ''
  },
  
  norway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['Fully Furnished'],
    heroImages: ['/images/norway/2nd floor/N2 - Room/N2I - Double Window.png'],

    amenityGrid: {
      propertyType: ['Shoplot - Fully furnished hostel-style accommodation'],
      propertyLayout: ['Second floor - 9 rooms', 'Third floor - 9 rooms'],
      
      roomType: [
        '10 Single Window',
        '4 Single Skylight',
        '4 Double Window ',
      ],
      
      occupancyType: ['Mixed-gender Floors'],
      bathroomFacilities: ['2 Shared Toilets per Floor'],
      
      sharedAmenities: [
        'Fridge', 
        'Washing Machine', 
        'Microwave', 
        'Induction Cooker',
        'Shower Heater'
      ],
      
      deposit: ['Two months'],
      utilities: ['Wi-Fi & Water Included', 'Room Electricity Paid by Tenant'],
    },
    floors: [
      {
        label: 'Second Floor',
        commonAreas: [
          { name: 'Dining', image: '/images/norway/2nd floor/N2 - Common Space/N2 - Dining Area.png' },
          { name: 'Kitchen', image: '/images/norway/2nd floor/N2 - Common Space/N2 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/norway/2nd floor/N2 - Common Space/N2 - Bathroom.png' },
          { name: 'Corridor', image: '/images/norway/2nd floor/N2 - Common Space/N2 - Corridor.png' },
          { name: 'Entrance', image: '/images/norway/2nd floor/N2 - Common Space/N2 - Entrance.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room N2A', image: '/images/norway/2nd floor/N2 - Room/N2A - Single Window.png' },
          { name: 'Room N2B', image: '/images/norway/2nd floor/N2 - Room/N2B - Double Window.png' },
          { name: 'Room N2C', image: '/images/norway/2nd floor/N2 - Room/N2C - Single Window.png' },
          { name: 'Room N2D', image: '/images/norway/2nd floor/N2 - Room/N2D - Single Skylight.png' },
          { name: 'Room N2E', image: '/images/norway/2nd floor/N2 - Room/N2E - Single Window.png' },
          { name: 'Room N2F', image: '/images/norway/2nd floor/N2 - Room/N2F - Single Skylight.png' },
          { name: 'Room N2G', image: '/images/norway/2nd floor/N2 - Room/N2G - Single Window.png' },
          { name: 'Room N2H', image: '/images/norway/2nd floor/N2 - Room/N2H - Single Window.png' },
          { name: 'Room N2I', image: '/images/norway/2nd floor/N2 - Room/N2I - Double Window.png' },
        ],
      },
      {
        label: 'Third Floor',
        commonAreas: [
          { name: 'Dining', image: '/images/norway/3rd floor/N3 - Common Space/N3 - Dining Area.png' },
          { name: 'Kitchen', image: '/images/norway/3rd floor/N3 - Common Space/N3 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/norway/3rd floor/N3 - Common Space/N3 - Bathroom.png' },
          { name: 'Corridor', image: '/images/norway/3rd floor/N3 - Common Space/N3 - Corridor.png' },
          { name: 'Entrance', image: '/images/norway/3rd floor/N3 - Common Space/N3 - Entrance.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room N3A', image: '/images/norway/3rd floor/N3 - Room/N3A - Single Window.png' },
          { name: 'Room N3B', image: '/images/norway/3rd floor/N3 - Room/N3B - Double Window.png' },
          { name: 'Room N3C', image: '/images/norway/3rd floor/N3 - Room/N3C - Single Window.png' },
          { name: 'Room N3D', image: '/images/norway/3rd floor/N3 - Room/N3D - Single Skylight.png' },
          { name: 'Room N3E', image: '/images/norway/3rd floor/N3 - Room/N3E - Single Window.png' },
          { name: 'Room N3F', image: '/images/norway/3rd floor/N3 - Room/N3F - Single Skylight.png' },
          { name: 'Room N3G', image: '/images/norway/3rd floor/N3 - Room/N3G - Single Window.png' },
          { name: 'Room N3H', image: '/images/norway/3rd floor/N3 - Room/N3H - Single Window.png' },
          { name: 'Room N3I', image: '/images/norway/3rd floor/N3 - Room/N3I - Double Window.png' },
        ],
      },
    ],
    mapImage: '/images/map/norwaymap.png',
    mapImageMobile: '/images/map/mobile/norwaymap.png',
    mapCaption: 'Unicity — ideal for students, with easy access to campus and everyday conveniences.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=2.342797,%20111.831039',
    virtualTourUrl: ''
  },
  
  steinway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['Fully Furnished'],
    heroImages: ['/images/steinway/2nd floor/S2 - Room/S2B - Double Window (Female).png'],

    amenityGrid: {
      propertyType: ['Shoplot - Fully furnished hostel-style accommodation'],
      propertyLayout: ['First floor (Male) - 8 rooms', 'Second floor (Female) - 9 rooms'],
      
      roomType: [
        '12 Single Window',
        '4 Single Skylight ',
        '1 Double Window ',
      ],
      
      occupancyType: ['Male-only / Female-only floors'],
      bathroomFacilities: ['2 Shared Toilets per Floor'],
      
      sharedAmenities: [
        'Fridge', 
        'Washing Machine', 
        'Microwave', 
        'Induction Cooker',
        'Shower Heater'
      ],
      
      deposit: ['Two months'],
      utilities: ['Wi-Fi & Water Included', 'Room Electricity Paid by Tenant'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: [
          { name: 'Dining', image: '/images/steinway/1st-floor/S1-common-space/S1-dining-area.png' },
          { name: 'Kitchen', image: '/images/steinway/1st-floor/S1-common-space/S1-kitchen.png' },
          { name: 'Bathroom', image: '/images/steinway/1st-floor/S1-common-space/S1-bathroom.png' },
          { name: 'Corridor', image: '/images/steinway/1st-floor/S1-common-space/S1-corridor.png' },
          { name: 'Dry-Yard', image: '/images/steinway/1st-floor/S1-common-space/S1-dry-yard.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room S1A', image: '/images/steinway/1st-floor/S1-room/S1A - Single Window (Male).png' },
          { name: 'Room S1B', image: '/images/steinway/1st-floor/S1-room/S1B - Single Window (Male).png' },
          { name: 'Room S1C', image: '/images/steinway/1st-floor/S1-room/S1C - Single Skylight (Male).png' },
          { name: 'Room S1D', image: '/images/steinway/1st-floor/S1-room/S1D - Single Window (Male).png' },
          { name: 'Room S1E', image: '/images/steinway/1st-floor/S1-room/S1E - Single Skylight (Male).png' },
          { name: 'Room S1F', image: '/images/steinway/1st-floor/S1-room/S1F - Single Window (Male).png' },
          { name: 'Room S1G', image: '/images/steinway/1st-floor/S1-room/S1G - Single Window (Male).png' },
          { name: 'Room S1H', image: '/images/steinway/1st-floor/S1-room/S1H - Single Window (Male).png' },
          { name: 'Room S1I', image: '/images/steinway/1st-floor/S1-room/S1I - Single Window (Male).png' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: [
          { name: 'Dining', image: '/images/steinway/2nd floor/S2 - Common Space/S2 - Dining Area.png' },
          { name: 'Kitchen', image: '/images/steinway/2nd floor/S2 - Common Space/S2 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/steinway/2nd floor/S2 - Common Space/S2 - Bathroom.png' },
          { name: 'Corridor', image: '/images/steinway/2nd floor/S2 - Common Space/S2 - Corridor.png' },
          { name: 'Dry-Yard', image: '/images/steinway/2nd floor/S2 - Common Space/S2 - Dry-Yard.png' }, 
        ],
        rooms: [
          { name: 'Room S2A', image: '/images/steinway/2nd floor/S2 - Room/S2A - Single Window (Female).png' },
          { name: 'Room S2B', image: '/images/steinway/2nd floor/S2 - Room/S2B - Double Window (Female).png' },
          { name: 'Room S2C', image: '/images/steinway/2nd floor/S2 - Room/S2C - Single Skylight (Female).png' },
          { name: 'Room S2D', image: '/images/steinway/2nd floor/S2 - Room/S2D - Single Window (Female).png' },
          { name: 'Room S2E', image: '/images/steinway/2nd floor/S2 - Room/S2E - Single Skylight (Female).png' },
          { name: 'Room S2F', image: '/images/steinway/2nd floor/S2 - Room/S2F - Single Window (Female).png' },
          { name: 'Room S2G', image: '/images/steinway/2nd floor/S2 - Room/S2G - Single Window (Female).png' },
          { name: 'Room S2H', image: '/images/steinway/2nd floor/S2 - Room/S2H - Single Window (Female).png' },
        ],
      },
    ],
    mapImage: '/images/map/steinwaymap.png',
    mapImageMobile: '/images/map/mobile/steinwaymap.png',
    mapCaption: 'Jalan Wawasan — with cafés, restaurants, and daily essentials just moments away.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=2.343988,%20111.835600',
    virtualTourUrl: ''
  },
  
  velway: {
    audienceTags: ['UNDERGRADUATE', 'POSTGRADUATE', 'WORKING ADULT'],
    highlightTags: ['Fully Furnished'],
    heroImages: ['/images/velway/2nd floor/V2 - Room/V2K - Single Window (Female).png'],

    amenityGrid: {
      propertyType: ['Shoplot - Fully furnished hostel-style accommodation'],
      propertyLayout: ['First floor (Male) - 10 rooms', 'Second floor (Female) - 11 rooms'],
      
      roomType: [
        '12 Single Window',
        '5 Single Skylight ',
        '4 Double Window ',
      ],
      
      occupancyType: ['Male-only / Female-only floors'],
      bathroomFacilities: ['2 Shared Toilets per Floor'],
      
      sharedAmenities: [
        'Fridge', 
        'Washing Machine', 
        'Dryer', 
        'Microwave', 
        'Induction Cooker',
        'Shower Heater'
      ],
      
      deposit: ['Two months'],
      utilities: ['Wi-Fi & Water Included', 'Room Electricity Paid by Tenant'],
    },
    floors: [
      {
        label: 'FIRST FLOOR',
        commonAreas: [
          { name: 'Dining', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Kitchen', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Bathroom', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Corridor', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Dry-Yard', image: '/images/velway/1st floor/coming soon.JPG' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room V1A', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1B', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1C', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1D', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1E', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1F', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1G', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1H', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1I', image: '/images/velway/1st floor/coming soon.JPG' },
          { name: 'Room V1J', image: '/images/velway/1st floor/coming soon.JPG' },
        ],
      },
      {
        label: 'SECOND FLOOR',
        commonAreas: [
          { name: 'Kitchen', image: '/images/velway/2nd floor/V2 - Common Space/V2 - Kitchen.png' },
          { name: 'Bathroom', image: '/images/velway/2nd floor/V2 - Common Space/V2 - Bathroom.png' },
          { name: 'Corridor', image: '/images/velway/2nd floor/V2 - Common Space/V2 - Corridor .png' },
          { name: 'Entrance', image: '/images/velway/2nd floor/V2 - Common Space/coming soon.JPG' },
          { name: 'Dry-Yard', image: '/images/velway/2nd floor/V2 - Common Space/V2 - Dry-Yard.png' }, // 👈 想要多加的 shared space 示范
        ],
        rooms: [
          { name: 'Room V2A', image: '/images/velway/2nd floor/V2 - Room/V2A - Double Window (Female).png' },
          { name: 'Room V2B', image: '/images/velway/2nd floor/V2 - Room/V2B - Double Window (Female).png' },
          { name: 'Room V2C', image: '/images/velway/2nd floor/V2 - Room/V2C - Single Window (Female).png' },
          { name: 'Room V2D', image: '/images/velway/2nd floor/V2 - Room/V2D - Single Skylight (Female).png' },
          { name: 'Room V2E', image: '/images/velway/2nd floor/V2 - Room/V2E - Single Window (Female).png' },
          { name: 'Room V2F', image: '/images/velway/2nd floor/V2 - Room/V2F - Single Skylight (Female).png' },
          { name: 'Room V2G', image: '/images/velway/2nd floor/V2 - Room/V2G - Single Window (Female).png' },
          { name: 'Room V1H', image: '/images/velway/2nd floor/V2 - Room/V2H - Single Window (Female).png' },
          { name: 'Room V1I', image: '/images/velway/2nd floor/V2 - Room/V2I - Single Skylight (Female).png' },
          { name: 'Room V1J', image: '/images/velway/2nd floor/V2 - Room/V2J - Single Window (Female).png' },
          { name: 'Room V1K', image: '/images/velway/2nd floor/V2 - Room/V2K - Single Window (Female).png' },
        ],
      },
    ],
    mapImage: '/images/map/velwaymap.png',
    mapImageMobile: '/images/map/mobile/velwaymap.png',
    mapCaption: 'Unicity — ideal for students, with easy access to campus and everyday conveniences.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=2.342737,%20111.832199',
    virtualTourUrl: ''
  },
  
  'opening-soon': {
    audienceTags: ['COMING SOON'],
    highlightTags: [],
    heroImages: ['/images/lifestyle-1.png'],
    amenityGrid: {
      propertyType: ['To Be Announced'],
      propertyLayout: ['To Be Announced'],
      roomType: ['To Be Announced'],
      occupancyType: ['To Be Announced'],
      bathroomFacilities: ['To Be Announced'],
      sharedAmenities: ['To Be Announced'],
      deposit: ['To Be Announced'],
      utilities: ['To Be Announced'],
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
      heroImages: ['/placeholder.svg'],
      amenityGrid: {
        propertyType: ['Co-Living Studio'],
        propertyLayout: ['Modern Layout'],
        roomType: ['Standard Single'],
        occupancyType: ['All Welcomed'],
        bathroomFacilities: ['Water Heater Equipped'],
        sharedAmenities: ['Basic Shared Kitchen & Wi-Fi'],
        deposit: ['Contact for Details'],
        utilities: ['Billed via Submeter'],
      },
      floors: [],
      mapImage: '/placeholder.svg',
      mapCaption: 'Sibu, Sarawak',
    }
  )
}