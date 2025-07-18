import React from 'react';
import { Helmet } from 'react-helmet';

interface EventStructuredDataProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: string;
  };
  image: string;
  price: string;
  priceCurrency: string;
  url: string;
  organizer: {
    name: string;
    url: string;
  };
}

export const EventStructuredData: React.FC<EventStructuredDataProps> = ({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  price,
  priceCurrency,
  url,
  organizer
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    location: {
      '@type': 'Place',
      name: location.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.address
      }
    },
    image,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      url,
      availability: 'https://schema.org/InStock'
    },
    organizer: {
      '@type': 'Organization',
      name: organizer.name,
      url: organizer.url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface OrganizationStructuredDataProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
}

export const OrganizationStructuredData: React.FC<OrganizationStructuredDataProps> = ({
  name,
  url,
  logo,
  description,
  telephone,
  email,
  address,
  sameAs
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry
    },
    sameAs
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface FAQStructuredDataProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ questions }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};