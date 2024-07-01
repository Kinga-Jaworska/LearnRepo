'use client';

import { combine, interpolate, separate } from 'flubber';
import { useEffect, useRef, useState } from 'react';
import {
    ANIMATION_DURATION_IN_MILLISECONDS,
    ANIMATION_MAX_SEGMENT_LENGTH,
    SVG_CONTENT_BODY,
} from './svgs.contants';

export function ServiceIconMultiple({ targetPath }) {
    const currentPath = SVG_CONTENT_BODY['devOps'].body;
    const [renderedPath, setRenderedPath] = useState([currentPath]);
    const renderedPathRef = useRef(renderedPath);
    const animationFrameId = useRef(-1);

    useEffect(() => {
        const separator = separate(currentPath, targetPath, {
            maxSegmentLength: ANIMATION_MAX_SEGMENT_LENGTH,
        });

        const timestampStart = performance.now();

        const scheduleRecursiveUpdate = (currentTimestamp) => {
            const timeDelta = currentTimestamp - timestampStart;
            const progress = Math.max(0, Math.min(1, timeDelta / ANIMATION_DURATION_IN_MILLISECONDS));
            const currentPaths = separator.map((separate) => separate(progress));
            
            setRenderedPath(currentPaths);
            renderedPathRef.current = currentPaths;

            if (progress < 1) {
                animationFrameId.current = requestAnimationFrame(scheduleRecursiveUpdate);
            }
        };

        animationFrameId.current = requestAnimationFrame(scheduleRecursiveUpdate);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [targetPath]);

    return (
        <svg
            width="500"
            height="500"
            viewBox="0 0 221 364"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {renderedPath.map((path, id) => (
                <path fillRule="evenodd" fill="white" d={path} key={id}/>
            ))}
        </svg>
    );
}
