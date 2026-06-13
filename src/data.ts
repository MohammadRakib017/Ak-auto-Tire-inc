import { Service, Review, FAQItem, ProcessStep, BusinessHours } from './types';

export const BUSINESS_INFO = {
  name: 'AK Auto & Tire Inc',
  phone: '+1 905-560-0777',
  phoneDisplay: '+1 (905) 560-0777',
  email: 'akauto0777@gmail.com',
  address: '4589 Bridge St, Niagara Falls, NY, United States, L2E 2R6',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.4497880941194!2d-79.05663749999999!3d43.1055536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d343469049755f%3A0xe5f86641b65bb744!2s4589%20Bridge%20St%2C%20Niagara%20Falls%2C%20NY%2014305%2C%20USA!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca',
  facebook: 'https://www.facebook.com/profile.php?id=61581523330990',
  foundedYear: '2016',
};

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Monday', hours: '8:00 AM - 6:00 PM', closed: false },
  { day: 'Tuesday', hours: '8:00 AM - 6:00 PM', closed: false },
  { day: 'Wednesday', hours: '8:00 AM - 6:00 PM', closed: false },
  { day: 'Thursday', hours: '8:00 AM - 6:00 PM', closed: false },
  { day: 'Friday', hours: '8:00 AM - 6:00 PM', closed: false },
  { day: 'Saturday', hours: '8:00 AM - 4:00 PM', closed: false },
  { day: 'Sunday', hours: 'Closed', closed: true },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'general-repair',
    title: 'General Auto Repair',
    description: 'Complete bumper-to-bumper mechanical repair services handled by certified technicians.',
    fullDetails: 'From steering linkages and suspension parts to steering boxes, control arms, and shock replacement. We diagnose and repair any complex mechanical issues that might impair your vehicle’s comfort and handling safety.',
    iconName: 'Wrench',
    category: 'repairs',
    estimatedTime: '1 - 3 hours',
    basePrice: '$89',
    features: ['Suspension & steering repairs', 'Shocks & struts replacement', 'Belt & hose servicing', 'Comprehensive multi-point check'],
  },
  {
    id: 'oil-change',
    title: 'Oil Change & Filter Service',
    description: 'Keep your engine lubricated and protected with premium oil, custom filters, and multi-point care.',
    fullDetails: 'Regular oil changes with high-grade synthetic, synthetic-blend, or high-mileage options according to manufacturer specifications. Includes a complimentary filter upgrade and high-precision fluid level inspections.',
    iconName: 'Droplets',
    category: 'maintenance',
    estimatedTime: '30 - 45 mins',
    basePrice: '$49',
    features: ['Premium engine oil replacement', 'High-quality filter upgrade', 'Fluid level topping', 'Tire pressure check & adjustment'],
  },
  {
    id: 'brake-repair',
    title: 'Brake Repair & Inspection',
    description: 'Ensuring your driving safety with master pad, rotor, caliper repairs, and fluid safety testing.',
    fullDetails: 'Squeaking, grinding, or soft brake pedals? We offer full rotor machining, ceramic brake pad replacements, caliper lubrication, lines inspection, and complete high-pressure brake fluid flushes.',
    iconName: 'Disc',
    category: 'repairs',
    estimatedTime: '1 - 2 hours',
    basePrice: '$120',
    features: ['Premium ceramic pads install', 'Rotors inspection & machining', 'Caliper servicing & lube', 'Brake fluid line bleeding & test'],
  },
  {
    id: 'tire-service',
    title: 'Tire Sales, Repair & Replacement',
    description: 'All-season, winter, and performance tires from leading world brands with precision puncture repair.',
    fullDetails: 'We carry top brands (Michelin, Bridgestone, Goodyear, Continental, and more) for any vehicle size. Offers fast mounting, professional flat repairs, safety pressure audits, and seasonal tire changeovers.',
    iconName: 'CircleDot',
    category: 'tires',
    estimatedTime: '30 - 60 mins',
    basePrice: '$25',
    features: ['All leading name brands', 'State-of-the-art mounting', 'Full puncture/flat repair', 'TPMS sensor calibration & reset'],
  },
  {
    id: 'wheel-alignment',
    title: 'Wheel Alignment & Balancing',
    description: 'Extend your tire lifespan and eliminate vehicle pulling with digital laser wheel alignments.',
    fullDetails: 'Using high-resolution 3D laser alignment targets to adjust your vehicle’s camber, caster, and toe to factory limits. We also dynamically balance wheels on advanced computer balancers to eliminate high-speed vibrations.',
    iconName: 'Settings2',
    category: 'tires',
    estimatedTime: '45 - 60 mins',
    basePrice: '$95',
    features: ['Precision 3D laser alignment', 'Digital computer balancing', 'Symmetrical tire wear promotion', 'Improved highway fuel efficiency'],
  },
  {
    id: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    description: 'State-of-the-art scanner inspections to find the exact cause behind your is check engine light.',
    fullDetails: 'We plug directly into your car’s OBD-II computer using the latest industry tools to read diagnostic trouble codes. We check live cylinder temperatures, fuel rail pressures, oxygen sensors, and misfire histories to give a reliable answer.',
    iconName: 'Activity',
    category: 'diagnostics',
    estimatedTime: '30 - 60 mins',
    basePrice: '$75',
    features: ['Full onboard computer scan', 'Misfires & air-fuel ratio checks', 'Emissions components report', 'Clear explanation & repair estimate'],
  },
  {
    id: 'engine-repair',
    title: 'Engine Repair & Tune-Ups',
    description: 'Keep your engine running at maximum performance with premium spark plugs, ignition parts, and mechanical overhauls.',
    fullDetails: 'Detailed spark plug testing, coil pack diagnostics, sensor swaps, valve cover gaskets, and timing belt system repairs. Our engine technicians ensure maximum compression, pristine firing order, and optimal torque.',
    iconName: 'Cpu',
    category: 'repairs',
    estimatedTime: '2 - 6 hours',
    basePrice: '$150',
    features: ['Platinum/Iridium spark plugs', 'Ignition coil diagnosis', 'Gaskets & timing belt replacements', 'Air intake & mass flow cleaning'],
  },
  {
    id: 'transmission-service',
    title: 'Transmission Service & Repair',
    description: 'Smooth shifting maintenance including high-tech fluid exchanges, filter swaps, and gear fixes.',
    fullDetails: 'We repair automatic and manual transmission systems. Services range from simple high-viscosity fluid changes and filter servicing to clutch replacements, torque converter tests, and full re-manufactures.',
    iconName: 'HardDrive',
    category: 'repairs',
    estimatedTime: '2 - 4 hours',
    basePrice: '$180',
    features: ['Complete fluid clean-out exchange', 'Pan gasket & high-flow filter swap', 'Clutch alignment & cylinder inspection', 'Electronic solenoids diagnostics'],
  },
  {
    id: 'battery-service',
    title: 'Battery Testing & Replacement',
    description: 'Prevent getting stranded with instant battery state-of-health diagnostics and top battery brands.',
    fullDetails: 'We measure battery cold cranking amps (CCA) and load capability. If a replacement is required, we install legendary national brand batteries tailored for extreme winter start reliance in northern states, completed with terminal corrosion shielding.',
    iconName: 'BatteryCharging',
    category: 'maintenance',
    estimatedTime: '15 - 30 mins',
    basePrice: '$129',
    features: ['Load & alternator testing', 'Premium Interstate & ACDelco brands', 'Corrosion blocker applied', 'Safe battery recycling included'],
  },
  {
    id: 'ac-service',
    title: 'Air Conditioning (A/C) Repair',
    description: 'Stay completely cool with reliable leak checks, system evacuations, and standard R-134a/YF recharges.',
    fullDetails: 'Full check of compressors, condenser coils, and cabin temperature fans. We check for micro-cracks with ultraviolet dye, evacuate toxic moisture pockets, and re-infuse accurate levels of clean eco-refrigerant.',
    iconName: 'Wind',
    category: 'maintenance',
    estimatedTime: '1 - 2 hours',
    basePrice: '$110',
    features: ['High-precision vacuum leak tests', 'Refrigerant pressure top-up', 'Compressor clutch inspection', 'Evaporator/cabin sanitizer clean'],
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Experienced Technicians',
    description: 'Our repair crew consists of highly trained, ASE-certified mechanics specializing in complex diagnostics, domestic model builds, and overseas system configurations.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Honest Upfront Pricing',
    description: 'No hidden fees. No unrequested add-ons. We always walk you through your digital system diagnostics, explaining each option BEFORE starting any repairs.',
    iconName: 'DollarSign',
  },
  {
    title: 'Fast Service Turnaround',
    description: 'We respect your schedule. We operate with high-speed diagnostic processes and strategic local parts warehouses to execute same-day services for most general repairs.',
    iconName: 'Zap',
  },
  {
    title: 'Quality Parts & Equipment',
    description: 'We exclusively select OEM-spec or higher premium grade aftermarket components, accompanied by a robust parts-and-workmanship backing on matches.',
    iconName: 'Cog',
  },
  {
    title: 'Customer Satisfaction Guaranteed',
    description: 'We treat every customer with family-oriented friendly respect. If your vehicle repair feels off, bring it right back—we are only happy when you drive away smiling.',
    iconName: 'Award',
  },
  {
    title: 'Reliable Vehicle Maintenance',
    description: 'Keep logs neatly updated. We compile automated logs of each oil service, brake check, and tire alignment to secure high resale value for your beloved vehicle.',
    iconName: 'CalendarCheck',
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Vehicle Inspection',
    description: 'Our technicians carry out a meticulous physical and visual multi-point safety assessment of your car’s main components.',
    iconName: 'Eye',
  },
  {
    stepNumber: 2,
    title: 'Detailed Diagnostics',
    description: 'We link state-of-the-art computers to your OBD port, reading live engine telemetry to target issues without guesswork.',
    iconName: 'Cpu',
  },
  {
    stepNumber: 3,
    title: 'Professional Repair',
    description: 'Only high-grade equipment and trusted parts are fitted inline, working diligently to match precise physical alignments.',
    iconName: 'Wrench',
  },
  {
    stepNumber: 4,
    title: 'Quality Check & Delivery',
    description: 'We test-drive, review system parameters on a post-repair scan, detail-clean our work-footprint, and hand over your keys.',
    iconName: 'CheckCircle',
  },
];

export const TESTIMONIALS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Marcus Henderson',
    location: 'Niagara Falls, NY',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The team at AK Auto is fantastic! Brought my SUV here for noise in the front wheel. They ran an inspection, showed me exactly where the bearing was failing, and did the repairs in under 2 hours. Very solid, honest team with great pricing!',
    avatarLetter: 'M',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Sarah Jenkins',
    location: 'Niagara Falls, NY',
    rating: 5,
    date: '1 month ago',
    comment: 'I rely on AK Auto & Tire for all my routine oil changes and winter tires. They are fast, friendly, and never try to up-sell you things you do not need! Truly a relief to find an honest mechanic shop near me.',
    avatarLetter: 'S',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'David Kowalski',
    location: 'Grand Island, NY',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Exceptional diagnostic skills. My check engine light has been on for months and two other shops could not figure out the misfire sensor issue. AK diagnosed a faulty wire clip in 15 minutes and fixed it for a fraction of what I expected. Highly recommended!',
    avatarLetter: 'D',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    location: 'Niagara Falls, NY',
    rating: 5,
    date: '2 months ago',
    comment: 'Amazing place! They replaced my tires and completed a laser alignment. Car drives as straight as an arrow now. The prices are super reasonable, and the owner is very polite and helpful. 5 stars all the way!',
    avatarLetter: 'E',
    verified: true,
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How often should I get an oil change?',
    answer: 'For modern vehicles, general synthetic motor oil survives comfortably between 7,500 and 10,000 miles (approximately 6 months to a year). Older vehicles using conventional oils should be updated every 3,000 to 5,000 miles.',
    category: 'Maintenance',
  },
  {
    question: 'My check engine light came on. What should I do?',
    answer: 'While it is usually safe to drive short distances with a solid light (unless the car displays heavy power shifts), you should get it scanned soon to prevent compounding damage. A flashing check engine light indicates an active engine misfire—you should pull over safely and call us immediately to prevent permanent catalytic converter failure.',
    category: 'Diagnostics',
  },
  {
    question: 'How do I know if my brakes need replacement?',
    answer: 'Typical safety warnings are high-pitched squealing, direct metallic grinding noises when pressing the pedal, vehicle steering pull under decel, and soft pedal responses. If you experience these, a ceramic pad inspect and rotor check is highly recommended.',
    category: 'Safety',
  },
  {
    question: 'What is the difference between wheel balancing and wheel alignment?',
    answer: 'Wheel alignment corrects the angle of your tires relative to each other and the road so the car travels perfectly straight without pulling. Wheel balancing corrects weight distribution discrepancies on standard metal wheels so they do not wobble or cause highway vibrations.',
    category: 'Tires',
  },
  {
    question: 'Do you charge a fee to scan my check engine light?',
    answer: 'Our professional engine diagnostics plug-in, code translation, and direct service quote is packaged for a clear upfront fee of $75. This is typically credited toward any approved repair work we carry out on that check light!',
    category: 'Pricing',
  },
  {
    question: 'Do you offer flat tire repairs or just full tire replacements?',
    answer: 'Yes! If the puncture occurs within the tread center and does not compromise the tire shoulder or sidewall, we carry out extremely secure permanent safety patch-plugs for just $25. This saves your high-grade tire from waste!',
    category: 'Tires',
  }
];

// Rich SEO/Schema structured queries content
export const SEO_ACCORDION_KEYWORDS = [
  { term: 'Auto Repair Niagara Falls', desc: 'AK Auto & Tire Inc is the premier local automotive repair facility, trusted by hundreds of families for reliable bumper-to-bumper car repairs.' },
  { term: 'Tire Shop Niagara Falls', desc: 'We deliver all prominent performance, summer, and winter tires brands right on Bridge St, complemented by fast digital computer balancing.' },
  { term: 'Brake Repair Niagara Falls', desc: 'Certified safety pad swaps, caliper replacement, and rotor machining. Stay secure in extreme road weather.' },
  { term: 'Oil Change Niagara Falls', desc: 'Prompt, clean, synthetic motor fluid top-ups of all weights, with full multi-point visual checkovers within 45 minutes.' },
  { term: 'Wheel Alignment Niagara Falls', desc: 'Precision laser-realigned steering specs to restore smooth, center-aligned highway transit and extend tire lifespan.' }
];
