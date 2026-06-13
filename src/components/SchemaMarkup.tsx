import React from 'react';
import { BUSINESS_INFO, BUSINESS_HOURS, SERVICES_DATA } from '../data';

export const SchemaMarkup: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    'name': BUSINESS_INFO.name,
    'image': 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1200',
    'phone': BUSINESS_INFO.phone,
    'email': BUSINESS_INFO.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '4589 Bridge St',
      'addressLocality': 'Niagara Falls',
      'addressRegion': 'NY',
      'postalCode': '14305', // correct NY postal code corresponding to Niagara falls Bridge St US border side
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '43.1055536',
      'longitude': '-79.0566374',
    },
    'url': 'https://ai.studio/build',
    'sameAs': [
      BUSINESS_INFO.facebook,
    ],
    'openingHoursSpecification': BUSINESS_HOURS.map((h) => {
      let days = [h.day];
      let opens = '08:00';
      let closes = '18:00';

      if (h.day === 'Saturday') {
        closes = '16:00';
      }

      return {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': days[0],
        'opens': h.closed ? '00:00' : opens,
        'closes': h.closed ? '00:00' : closes,
      };
    }),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Automotive Services',
      'itemListElement': SERVICES_DATA.map((srv, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': srv.title,
          'description': srv.description,
        },
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': srv.basePrice.replace('$', ''),
          'priceCurrency': 'USD',
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
export default SchemaMarkup;
