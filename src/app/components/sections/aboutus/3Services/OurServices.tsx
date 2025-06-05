import React, { FC } from "react"; 
import OtherServices from "./servicesComponents/other/OtherServices";
import NewsletterService from "./servicesComponents/newsletter/NewsletterService";
import ConsultancyService from "./servicesComponents/consultancy/ConsultancyService";
import PrServices from "./servicesComponents/pr/PrServices";
import SemServices from "./servicesComponents/sem/SemServices";
import SocialServices from "./servicesComponents/social/SocialServices";
 
 

const OurServices: FC = () => {
 

    return (
        <section
            className="bg-zinc-900 text-white"
            style={{
                position: "relative",
                zIndex: 10,
                borderTopLeftRadius: "50% 100px",
                borderTopRightRadius: "50% 100px",
            }}
        >
            <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
                <h2 className="text-left text-6xl font-bold mb-12">
                    Nuestros Servicios
                </h2>
                <ConsultancyService/>
                <PrServices/>
                <SemServices/>
                <SocialServices/>
                <PrServices/>
                <NewsletterService/>
                <OtherServices/>
            </div>
        </section>
    );
};

export default OurServices;
