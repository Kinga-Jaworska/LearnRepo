'use client';

import { useMemo, useState } from 'react';

// import Link from 'next/link';
// import { ArrowButton } from '@/components/arrow-button/arrow-button';
// import routes from '@/constants/routes';
import { ServiceIcon } from './service-icon';
import { SVG_CONTENT_BODY } from './svgs.contants';




export function SVGBody() {
    const svgs = ['abstract1', 'abstract2']
    const orderedPaths = useMemo(
        () => svgs.map((service) => SVG_CONTENT_BODY[service].body),
        [svgs]
    );

    const [targetPath, setTargetPath] = useState(orderedPaths[0]);

    //todo-psobczuk Restore links before release
    return (
        <div className="flex flex-col justify-center gap-6 tablet:flex-row tablet:gap-4 desktop:gap-10">
            <div className="flex ">
                <ServiceIcon targetPath={targetPath} />
            </div>

            <div className="flex flex-[652] flex-col desktop:max-w-[652px] gap-4">

                {svgs.map((title, pathIndex) => (
                    <button onMouseEnter={() => {
                        setTargetPath(orderedPaths[pathIndex]);
                    }} key={title} className='border-2 border-purple p-2 rounded-xl'>
                        {title}
                    </button>))}
            </div>
        </div>
    );
}
