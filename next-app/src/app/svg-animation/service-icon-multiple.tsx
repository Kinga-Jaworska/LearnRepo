'use client';

import { combine, interpolate, separate } from 'flubber';
import { useEffect, useRef, useState } from 'react';
import {
    ANIMATION_DURATION_IN_MILLISECONDS,
    ANIMATION_MAX_SEGMENT_LENGTH,
    SVG_CONTENT_BODY,
} from './svgs.contants';

export function ServiceIconMultiple() {
    const targetPath = [SVG_CONTENT_BODY['star2'].body, SVG_CONTENT_BODY['star'].body];
    const currentPath = SVG_CONTENT_BODY['devOps'].body;
    const [renderedPath, setRenderedPath] = useState(targetPath);
    const renderedPathRef = useRef(renderedPath);
    const animationFrameId = useRef(-1);

    useEffect(() => {
        const separator = separate(currentPath, targetPath, {
            maxSegmentLength: ANIMATION_MAX_SEGMENT_LENGTH,
        });

        const timestampStart = performance.now();

        const scheduleRecursiveUpdate = (currentTimestamp: number) => {
            const timeDelta = currentTimestamp - timestampStart;
            const progress = Math.max(0, Math.min(1, timeDelta / ANIMATION_DURATION_IN_MILLISECONDS));
            const currentPath: string[] = [];
            separator.map((separate: (t: number) => string) => {
                currentPath.push(separate(progress))
                setRenderedPath(currentPath);
                renderedPathRef.current = currentPath;


            })

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
            {renderedPath.map((path, id) =>
                <path fillRule="evenodd" fill="white" d={path} key={id}/>
            )}
        </svg>
    );
}
