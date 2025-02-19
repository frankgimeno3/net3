import React, { FC } from 'react';

interface FooterSectionProps {}

const FooterSection: FC<FooterSectionProps> = ({}) => {
  return (
    <div className="flex flex-row w-full justify-center py-5">
      <div className="flex flex-col">
        <p>Logo</p>
        <p>© 2024 PROPORCION 3,S.A. All rights reserved.</p>
        <p>info@proporcion3.com</p>
      </div>
      <div className="flex flex-row px-12 text-sm">
        <div className="flex flex-col px-12" style={{ maxWidth: '900px' }}>
          <p className="font-bold">PAGES</p>
          <div className="flex flex-col py-2">
            <p className="hover:font-bold">Who we are</p>
            <p className="hover:font-bold">What we do</p>
            <p className="hover:font-bold">Contact</p>
          </div>
        </div>
        <div className="flex flex-col px-12" style={{ maxWidth: '900px' }}>
          <p className="font-bold">SERVICES</p>
          <div className="flex flex-col py-2">
            <p className="hover:font-bold">Content consultancy</p>
            <p className="hover:font-bold">Contents plan</p>
            <p className="hover:font-bold">Content generation</p>
            <p className="hover:font-bold">Content promotion</p>
          </div>
        </div>
        <div className="flex flex-col px-12" style={{ maxWidth: '900px' }}>
          <p className="font-bold">LINKS OF INTEREST</p>
          <div className="flex flex-col py-2">
            <p className="hover:font-bold">Legal advise</p>
            <p className="hover:font-bold">Privacy and cookie policy</p>
            <p className="hover:font-bold">Accessibility Statement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
