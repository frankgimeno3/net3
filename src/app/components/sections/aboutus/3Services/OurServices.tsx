import React, { FC } from "react"; 
import OtherServices from "./servicesComponents/other/OtherServices";
import NewsletterService from "./servicesComponents/newsletter/NewsletterService";
import ConsultancyService from "./servicesComponents/consultancy/ConsultancyService";
import PrServices from "./servicesComponents/pr/PrServices";
// import SemServices from "./servicesComponents/sem/SemServices";
import SocialServices from "./servicesComponents/social/SocialServices";
 import { useLanguage } from '@/app/context/LanguageContext';


 

const OurServices: FC = () => {
     const { lang } = useLanguage();  


    return (
        <section
            className="bg-zinc-900 text-white bg-opacity-90 pb-24"
            style={{
                position: "relative",
                zIndex: 10,
            borderBottomLeftRadius: "50% 100px",
            borderBottomRightRadius: "50% 100px",
            }}
        >
            <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
                <h2 className="text-left text-4xl md:text-7xl font-bold my-12 mt-24">
                    {lang == "ESP" ? "Nuestros servicios":"Our services"}
                </h2>
                <ConsultancyService/>
                <PrServices/>
                {/* <SemServices/> */}
                <SocialServices/>
                <NewsletterService/>
                <OtherServices/>
            </div>
        </section>
    );
};

export default OurServices;
