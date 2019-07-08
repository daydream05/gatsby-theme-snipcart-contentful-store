import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const ProductSEO = (props) => {
  const { name, imageList, description, sku, mpn, brandName, url, price, inStock } = props
  const schemaOrgJSONLD = {
    '@context': "https://schema.org/",
    '@type': "Product",
     name,
    'image': imageList,
    description,
    sku,
    mpn,
    "brand": {
      "@type": "Thing",
      "name": brandName,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "89"
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "USD",
      "price": price,
      "priceValidUntil": "2020-11-05",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Executive Objects"
      }
    }
  }

  return (
    <Helmet>
      <title>{name}</title>
      <meta name="description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

ProductSEO.propTypes = {
  name: PropTypes.string,
  imageList: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  sku: PropTypes.string,
  mpn: PropTypes.string,
  brandName: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
  inStock: PropTypes.bool,
}

ProductSEO.defaultProps = {
  inStock: true,
}

export default ProductSEO