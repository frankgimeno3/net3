import React, { FC } from 'react';

interface SvgsProps {
    index: number;
    selectedReason:number;
}

const Svgs: FC<SvgsProps> = ({ index, selectedReason }) => {
    return (
        <>
            {index == 0 &&
                <>
                    <svg fill={selectedReason === index ? '#FFF176' : '#BDBDBD'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"   stroke={selectedReason === index ? '#FFF176' : '#BDBDBD'}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <g> <path d="M350.281,169.609l-23.594,21.625C343.016,209.047,352,232.047,352,256c0,52.938-43.062,96-96,96s-96-43.062-96-96 s43.062-96,96-96v-32c-70.578,0-128,57.422-128,128s57.422,128,128,128s128-57.422,128-128 C384,224.016,372.031,193.344,350.281,169.609z"></path> <polygon points="272,262.391 307.188,138.688 240,249.609 248,272 "></polygon> </g> </g> </g></svg>
                </>
            }
            {index == 1 &&
                <>
                    <svg fill={selectedReason === index ? '#FFF176' : '#BDBDBD'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <g> <path d="M152.312,242.875c17.797,14.688,42.258,16.219,61.484,5.828l4.227,3.828l18.062-14.906 c-1.367-3.688-1.914-7.656-1.547-11.688c0.516-5.719,2.859-10.969,6.602-15.234c3.102-18.172-3.266-37.375-18.641-50.062 c-16.188-13.344-37.164-21.203-55.352-13.766c-2.273,0.938,7.055,20.531,7.055,20.531l23.57,7.875L205.508,202l-7.359,8.625 l-7.344,8.609l-28.141-2.844l-11.953-21.422c0,0-21.266-5.656-21.805-3.328C124.602,210.594,136.125,229.531,152.312,242.875z"></path> <path d="M375.875,322l-68.125-51.203c-1.406,2-2.969,3.859-4.938,5.484c-4.844,4.031-11.172,6.297-17.656,6.297 c-4.891,0-9.609-1.266-13.75-3.594l-12.602,10.406l81.805,73.953L360.484,368l11.781-13.781L384,340.438L375.875,322z"></path> <path d="M278.047,261.312c3.297,3.875,9.156,4.391,13.078,1.125c3.891-3.188,4.406-8.875,1.234-12.75l70.375-57.672 c7.672-6.328,8.672-17.578,2.234-25.125c-6.453-7.547-17.922-8.531-25.562-2.203L269,222.375c-3.297-3.781-9.07-4.266-12.961-1.031 c-3.93,3.219-4.438,9.016-1.133,12.859l5.703,6.672l-97.93,80.781l-13.031,3.953l-15,19.156l11.75,13.766l21.555-10.594 l6.586-12.406l97.836-80.859L278.047,261.312z"></path> </g> </g></svg>

                </>
            }
            {index == 2 &&
                <>
                    <svg fill={selectedReason === index ? '#FFF176' : '#BDBDBD'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"   stroke={selectedReason === index ? '#FFF176' : '#BDBDBD'}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <g> <polygon points="208.109,240.039 240.039,240.039 240.039,319.867 271.969,319.867 271.969,240.039 303.891,240.039 256,192.148 "></polygon> <path d="M189.484,165.883c-9.445,6.969-17.711,15.359-24.539,24.906l12.961,9.281c5.867-8.188,12.961-15.344,21.062-21.359 L189.484,165.883z"></path> <path d="M255.164,159.961l-0.148-15.969c-11.789,0.109-23.398,2.031-34.5,5.75l5.055,15.125 C235.078,161.695,245.023,160.039,255.164,159.961z"></path> <path d="M190.516,346.867c9.539,6.875,20.047,12.203,31.227,15.781l4.891-15.203c-9.586-3.062-18.594-7.609-26.766-13.516 L190.516,346.867z"></path> <path d="M149.633,291.18c3.703,11.141,9.094,21.594,16.07,31.078l12.852-9.453c-5.953-8.141-10.602-17.094-13.766-26.641 L149.633,291.18z"></path> <path d="M164.453,226.883l-15.219-4.828c-3.469,10.953-5.234,22.359-5.234,33.938v0.609l15.961-0.609 C159.961,246.055,161.477,236.258,164.453,226.883z"></path> <path d="M345.938,189.227l-12.828,9.516c6.047,8.109,10.734,17.047,13.938,26.547l15.141-5.094 C358.453,209.102,352.984,198.664,345.938,189.227z"></path> <path d="M363.25,255.164l-11.219,0.828c0,10.109-1.578,20.078-4.672,29.641l15.203,4.906c3.609-11.141,5.438-22.75,5.438-34.859 L363.25,255.164z"></path> <path d="M312.547,333.617l9.422,12.875c9.516-6.938,17.828-15.281,24.703-24.766l-12.906-9.391 C327.859,320.492,320.703,327.633,312.547,333.617z"></path> <path d="M289.625,149.133l-4.812,15.234c9.594,3.016,18.641,7.516,26.859,13.375l9.281-13.016 C311.344,157.914,300.797,152.648,289.625,149.133z"></path> <path d="M256.273,352.055l0.062,15.953c11.828-0.047,23.43-1.906,34.539-5.531l-4.984-15.172 C276.406,350.398,266.438,351.992,256.273,352.055z"></path> </g> </g></svg>
                </>
            }
            {index == 3 &&
                <>
                    <svg fill={selectedReason === index ? '#FFF176' : '#BDBDBD'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"   stroke={selectedReason === index ? '#FFF176' : '#BDBDBD'}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <polygon points="208,271.5 251.203,271.5 208,383.688 304,239.5 261.656,239.5 304,127.688 "></polygon> </g></svg>
                </>
            }
            {index == 4 &&
                <>
                    <svg fill={selectedReason === index ? '#FFF176' : '#BDBDBD'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"   stroke={selectedReason === index ? '#FFF176' : '#BDBDBD'}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <rect x="128" y="224" width="160" height="160"></rect> <g> <polygon points="336,176 176,176 176,208 304,208 304,336 336,336 "></polygon> </g> <g> <polygon points="384,128 224,128 224,160 352,160 352,288 384,288 "></polygon> </g> </g> </g></svg>
                </>
            }

        </>
    );
};

export default Svgs;