export const COMPANY_INFO = {
  name: 'TinStar Heating & Cooling',
  domain: 'tinstar.ca',
  phone: '(250) 758-STAR',
  phoneRaw: '2507587827',
  emergencyPhone: '(250) 758-7827',
  email: 'service@tinstar.ca',
  address: 'Nanaimo, British Columbia, Canada',
  serviceArea: 'Nanaimo, Lantzville, Parksville, Qualicum Beach, Ladysmith & Cedar',
  hours: 'Open 24 Hours / 7 Days a Week for Emergency Repairs',
  officeHours: 'Monday – Friday: 7:30 AM – 5:30 PM | Saturday: 8:00 AM – 4:00 PM',
  license: 'BC Safety Authority Class A Gas & Red Seal Refrigeration #L-BC89421',
  cleanBcRegistered: true,
  rating: 4.9,
  reviewsCount: 148,
};

export const SERVICES = [
  {
    id: 'heat-pumps',
    title: 'Heat Pumps',
    tagline: 'Year-Round Heating & Cooling Engineered for Vancouver Island Climate',
    category: 'Flagship Service',
    badge: 'CleanBC Rebates Up To $11,000',
    description: 'Central ducted heat pumps and ductless multi-zone mini-splits designed to handle Nanaimo’s mild maritime winters and hot summer stretches with whisper-quiet, ultra-high COP efficiency.',
    highlights: [
      'CleanBC & Canada Greener Homes rebate guidance',
      'Cold-climate performance down to -25°C',
      'Whisper-quiet operation (< 20 dB indoor units)',
      'Ductless multi-zone and central ducted retrofits',
      '10-Year parts & compressor warranty'
    ],
    idealFor: 'Nanaimo homeowners switching from baseboards, oil, or aging gas furnaces.',
    stats: 'Up to 60% lower winter heating costs'
  },
  {
    id: 'heating',
    title: 'Heating Systems',
    tagline: 'High-Efficiency Gas & Electric Furnaces, Boilers & Radiant Heat',
    category: 'Essential Comfort',
    badge: 'Same-Day Replacement Available',
    description: 'Keep your home cozy through coastal damp chills. We install, tune, and replace 96%+ AFUE two-stage and modulating gas furnaces, electric air handlers, and hybrid dual-fuel systems.',
    highlights: [
      'High-efficiency variable-speed modulating furnaces',
      'Electric furnace conversions & electrical panel matching',
      'Hydronic radiant floor heating & combi-boilers',
      'Comprehensive safety inspection & carbon monoxide check',
      'Filter racks & advanced HEPA/MERV 16 filtration'
    ],
    idealFor: 'Complete heating peace of mind during Vancouver Island winter storms.',
    stats: 'Up to 98% AFUE efficiency ratings'
  },
  {
    id: 'cooling',
    title: 'Air Conditioning',
    tagline: 'Precision Cooling, Dehumidification & Fresh Filtered Air',
    category: 'Summer Comfort',
    badge: 'Rapid Summer Installation',
    description: 'Beat summer heatwaves in Nanaimo with high-SEER central air conditioning and ductless cooling systems. Enjoy balanced temperatures on every floor without hot second-story bedrooms.',
    highlights: [
      'High SEER2 energy-efficient AC units',
      'Whole-home humidity management',
      'Eco-friendly next-gen R-454B / R-32 refrigerants',
      'Smart WiFi thermostat integration (Ecobee/Nest)',
      'Multi-story zoning to eliminate hot upstairs bedrooms'
    ],
    idealFor: 'Homes that bake during July/August Pacific Northwest heat domes.',
    stats: 'Even temperature across all rooms within 1°C'
  },
  {
    id: 'air-balancing',
    title: 'Air Balancing & IAQ',
    tagline: 'Certified Testing, Adjusting & Balancing (TAB) for Perfect Airflow',
    category: 'Signature Specialty',
    badge: 'Unique Specialized Trade Skill',
    description: 'Most HVAC contractors guess airflow — TinStar measures and balances it with precision flow hoods and manometers. We eliminate hot and cold spots, balance supply and return registers, and ensure balanced ventilation.',
    highlights: [
      'Certified flow-hood CFM volume verification',
      'Static pressure testing & duct restriction elimination',
      'Damper adjustment for multi-level temperature parity',
      'HRV / ERV whole-home fresh air exchange balancing',
      'Eliminates noisy registers and whistling ducts'
    ],
    idealFor: 'Homes with freezing bedrooms, stuffy upstairs, or poorly performing new heat pumps.',
    stats: 'Airflow balanced to within ±5% of design spec'
  },
  {
    id: 'installations',
    title: 'New Installations',
    tagline: 'Custom Sheet Metal Fabrication & New Home HVAC Engineering',
    category: 'Craftsmanship',
    badge: 'Custom "Tin" Sheet Metal Shop',
    description: 'True to the "TinStar" name, our roots are grounded in master sheet metal craftsmanship. We custom-fabricate transition fittings, supply plenums, and low-friction duct networks for custom builds and renovations.',
    highlights: [
      'Custom fabricated sheet metal fittings on Vancouver Island',
      'Manual J (heat load) & Manual D (duct design) engineering',
      'Architectural home & renovation HVAC mechanical rough-in',
      'Acoustically lined return plenums for silent airflow',
      'Turnkey municipal permit management in City of Nanaimo'
    ],
    idealFor: 'Builders, custom home owners, and major home additions in Nanaimo.',
    stats: 'Aerodynamically optimized airflow transitions'
  },
  {
    id: 'repairs-24-7',
    title: '24/7 Emergency Repairs',
    tagline: 'On-Call Red Seal Technicians Dispatched 24 Hours a Day',
    category: 'Emergency Response',
    badge: 'Guaranteed 24/7 Dispatch',
    description: 'Furnace stopped on Christmas Eve? Heat pump iced over in a freeze? AC down in a 35°C heatwave? Our fully stocked Nanaimo service vans are on the road 24/7/365 with transparent upfront pricing.',
    highlights: [
      'Real live person answering your emergency call 24/7',
      'Fully equipped service trucks carrying universal parts',
      'Diagnostic fee credited toward authorized repairs',
      'All major brands: Daikin, Mitsubishi, Lennox, Trane, Carrier, Fujitsu, Bosch',
      'Red Seal certified Journeyperson technicians'
    ],
    idealFor: 'Any sudden breakdown, weird banging noise, gas smell, or heating outage.',
    stats: 'Average Nanaimo emergency arrival under 60 minutes'
  }
];

export const SERVICE_AREAS = [
  { name: 'North Nanaimo', detail: 'North Town, Dover Bay, Hammond Bay', eta: '25-45 mins' },
  { name: 'Central Nanaimo', detail: 'Departure Bay, Quarterway, Townsite', eta: '15-30 mins' },
  { name: 'South Nanaimo & Harewood', detail: 'VIU District, Chase River, Extension', eta: '20-35 mins' },
  { name: 'Lantzville', detail: 'Upper & Lower Lantzville coastal homes', eta: '30-45 mins' },
  { name: 'Parksville & Qualicum', detail: 'Oceanside community coverage', eta: '35-50 mins' },
  { name: 'Cedar & Ladysmith', detail: 'Yellow Point, Saltair, South Island link', eta: '30-45 mins' },
  { name: 'Nanoose Bay', detail: 'Fairwinds, Red Gap, Schooner Cove', eta: '30-40 mins' }
];

export const REBATE_DATA = [
  {
    source: 'CleanBC Better Homes',
    amount: 'Up to $6,000',
    detail: 'Converting from fossil fuel (natural gas, propane, or oil) to an electric heat pump.'
  },
  {
    source: 'BC Hydro / FortisBC Top-Ups',
    amount: 'Up to $3,000',
    detail: 'Utility efficiency incentives for eligible high-SEER2 central and multi-head heat pumps.'
  },
  {
    source: 'Nanaimo Municipal Bonus',
    amount: 'Up to $750',
    detail: 'City of Nanaimo climate action community heat pump switch incentive.'
  },
  {
    source: 'Canada Greener Homes Loan',
    amount: 'Up to $40,000',
    detail: '10-year interest-free financing (0% APR) through the federal green loan program.'
  }
];

export const REVIEWS = [
  {
    name: 'Brent & Corinne M.',
    neighborhood: 'Departure Bay, Nanaimo',
    service: 'Heat Pump & Air Balancing',
    rating: 5,
    date: '3 weeks ago',
    text: 'TinStar installed our Daikin ducted heat pump and did a full air balancing test. Our upstairs master bedroom was always 4 degrees hotter than the main floor with our old setup. After their air balancing adjustments, every room in the house is within half a degree. Outstanding craftsmanship and friendly local crew!'
  },
  {
    name: 'Dave K.',
    neighborhood: 'North Nanaimo (Dover Bay)',
    service: '24/7 Emergency Repair',
    rating: 5,
    date: 'Last month',
    text: 'Our furnace died on a Friday night during a cold snap. Called TinStar at 10 PM and had a Red Seal tech at our door in 40 minutes. He diagnosed a failed flame sensor, had the replacement part right on his truck, and had our heat restored in under an hour. No gouging, just honest upfront pricing.'
  },
  {
    name: 'Melissa S.',
    neighborhood: 'Lantzville, BC',
    service: 'Custom Installation & CleanBC Rebate',
    rating: 5,
    date: '2 months ago',
    text: 'We took advantage of the CleanBC rebates with TinStar. They handled the paperwork, calculated our exact rebate amount ($9,500 total between province and federal programs), and fabricated beautiful custom tin duct transitions in their shop. Very clean, quiet heat pump installation.'
  },
  {
    name: 'Robert T.',
    neighborhood: 'Hammond Bay, Nanaimo',
    service: 'Air Balancing & High Efficiency Cooling',
    rating: 5,
    date: '3 months ago',
    text: 'As an engineer, I was specifically searching for an HVAC contractor who understood certified Air Balancing and static pressure. TinStar is in a league of their own. They didn’t just hang equipment; they tuned our airflow with flow hoods. Cannot recommend them enough.'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Red Seal Certified Trades',
    description: 'Every job is executed or supervised by provincially and interprovincially certified Red Seal Refrigeration & Gas Fitters.'
  },
  {
    title: 'Vancouver Island Built',
    description: 'Locally owned and based right here in Nanaimo. We understand coastal humidity, salt air conditions, and local building codes.'
  },
  {
    title: 'True Custom Sheet Metal',
    description: 'Our in-house fabrication guarantees tight, low-turbulence duct transitions that run whisper-quiet and last a lifetime.'
  },
  {
    title: 'Upfront Honest Quotes',
    description: 'Never any surprise invoices or hidden trip charges. You approve the exact cost before a single wrench turns.'
  }
];
