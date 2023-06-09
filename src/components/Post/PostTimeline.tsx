import { useState } from "react";

import { HeatmapProps } from "../../types";

import { useHeatmap } from "../../hooks";

import "../../style/PostTimeline.scss";

const PostTimelinePeriod: React.FC<{ heatmap: HeatmapProps[], max: number }> = ({ heatmap, max }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

    const heat = (index: number): string => {
        const count = heatmap[index]?.count;

        if (!count || count === 0)
            return "#d9d9d9"

        const red = Math.floor(255 * (count / max));
        const green = Math.floor(255 * ((max - count) / max));
        const blue = 0;

        return `rgb(${red}, ${green}, ${blue})`;
    }

    const activeIndex = hoveredIndex === -1 ? 0 : hoveredIndex;

    const totalPosts = heatmap.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);

    return <>
        <div className="divider">
            <p>
                {heatmap[activeIndex].date.split("/")[0].length === 1 && "0"}
                {heatmap[activeIndex].date}
                <span>({hoveredIndex === -1 ? totalPosts : heatmap[activeIndex].count})</span>
            </p>
        </div>

        {Array.from({ length: heatmap.length }, (_, index) => <>
            <div
                className="month"
                style={{
                    backgroundColor: heat(index),
                    outlineColor: heat(index),
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
            />
        </>)}
    </>
}

export const PostTimeline: React.FC = () => {
    const heatmap = useHeatmap();

    return <div className="timeline">
        {Array.from({ length: Math.ceil(heatmap.length / 4) }, (_, index) => <>
            <PostTimelinePeriod
                heatmap={heatmap.slice(index * 4, (index + 1) * 4)}
                max={heatmap.length - 1}
            />
        </>)}
    </div>
}