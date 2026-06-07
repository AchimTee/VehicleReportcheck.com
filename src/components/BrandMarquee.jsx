import React from 'react';
import './BrandMarquee.css';

const brands = [
    { name: 'Toyota', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Logo.svg' },
    { name: 'Honda', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Honda-logo.svg' },
    { name: 'Mercedes-Benz', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_logo.svg' },
    { name: 'BMW', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW.svg' },
    { name: 'Audi', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/AUDI_Logo_(2024).svg' },
    { name: 'Hyundai', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai_Motor_Company_logo.svg' },
    { name: 'Ford', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ford_logo.svg' },
    { name: 'Kia', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/KIA_logo3.svg' },
    { name: 'Nissan', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan_2020_logo.svg' },
    { name: 'Volkswagen', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_logo_2019.svg' },
    { name: 'Chevrolet', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet_simple_logo.svg' },
    { name: 'Lexus', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lexus.svg' },
    { name: 'Mazda', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mazda_logo_2024.svg' },
    { name: 'Subaru', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Subaru_logo_(transparent).svg' },
    { name: 'Jeep', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeep_logo.svg' },
    { name: 'Ram', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Trucks_2025_wordmark.svg' },
    { name: 'Dodge', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dodge_black_logo.svg' },
    { name: 'Porsche', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Porsche.svg' },
    { name: 'Land Rover', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Land_Rover_2023.svg' },
    { name: 'Jaguar', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar_2024.svg' },
    { name: 'Volvo', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Volvo_logo.svg' },
    { name: 'Tesla', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tesla_T_symbol.svg' },
    { name: 'Ferrari', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari-Logo.svg' },
    { name: 'Lamborghini', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Logo.svg' },
];

const BrandMarquee = () => {
    return (
        <div className="brand-marquee-container">
            <p className="brands-title">Trusted by Leading Global Brands</p>
            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {/* Render brands twice to create seamless loop */}
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={`${brand.name}-${index}`} className="marquee-item" title={brand.name}>
                            <img
                                src={brand.url}
                                alt={brand.name}
                                onError={(e) => {
                                    const parent = e.target.parentElement;
                                    if (parent) {
                                        e.target.style.display = 'none';
                                        parent.innerText = brand.name;
                                        parent.style.fontWeight = 'bold';
                                        parent.style.color = '#ccc';
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandMarquee;
