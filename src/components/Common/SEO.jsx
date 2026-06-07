import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
    const siteName = 'Vehicle Report Check';
    const defaultDescription = 'Get instant Vehicle History Reports globally. Check VIN for accidents, mileage, and theft. Buy and sell verified cars with confidence on Vehicle Report Check.';
    const defaultImage = 'https://vehiclereportcheck.com/og-image.jpg';
    const defaultUrl = 'https://vehiclereportcheck.com/';

    const metaTitle = title ? `${title} | ${siteName}` : 'Vehicle Report Check - Global Vehicle History Reports & VIN Check';
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaUrl = url || defaultUrl;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
