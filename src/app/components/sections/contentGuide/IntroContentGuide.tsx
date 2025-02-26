import React, { FC } from 'react';

interface IntroContentGuideProps {

}

const IntroContentGuide: FC<IntroContentGuideProps> = ({ }) => {
    return (
        <div>
            <p className='pt-5 font-bold'>Content Guide</p>
            <div className='p-5'>
                <p className='pt-5 font-bold'>What content can we make for you?</p>
                <p>We create any kind of text content for your social media in 2 contents:</p>
                <p>1-brief text for social networks.</p>
                <div className='p-5'>
                    <p>Short, catchy, easy to read content which you will publish in social networks</p>
                    <p>It should capture the attention of your public without boring them, but still being truthy about it¡s content</p>
                    <p>Below it, we will always add a "miniature" (catching attention image) or video and A LINK!</p>
                    <p>Believe it or not, the link is the most important part, as it is the call to action which will redirect</p>
                    <p>The reader to your full article, product catalog, or any destination in which it might turn into a "conversion of some sort"</p>
                </div>
                <p className='pt-5 font-bold'>2-Full press releases</p>
                <div className='p-5'>
                    <p>Longer, more technical and detailed content to be published in your blog or website</p>
                    <p>Here, you should be adding some real value to your customer</p>
                    <p>After any press release, you should always add some call to action to maximise conversion!</p>
                </div>
            </div>

        </div>
    );
};

export default IntroContentGuide;