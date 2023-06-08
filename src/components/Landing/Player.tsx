import { useCallback, useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlay, faPause } from "@fortawesome/pro-duotone-svg-icons";

import { PLAYER } from "../../constants";

import { useScroll } from "../../hooks";

import { verboseTimestamp } from "../../utils";

import "../../style/Player.scss";

const BREAKPOINT = 1200;

export const Player: React.FC = () => {
    const { target } = useScroll();

    const ref = useRef<HTMLAudioElement>(null);
    const animationRef = useRef<number>(0);

    const [player, setPlayer] = useState(PLAYER);

    const time = verboseTimestamp(player.time);
    const duration = verboseTimestamp(ref.current?.duration || 0);

    const onSongChange = (direction: number) => {
        const { track, tracks } = player;

        let nextTrack = track + direction;

        if (nextTrack < 0 || nextTrack >= tracks.length) {
            nextTrack = nextTrack < 0 ? tracks.length - 1 : 0;
        }

        setPlayer({ ...player, track: nextTrack });
    }

    const repeat = useCallback(() => {
        const { current } = ref;
        const { current: animationCurrent } = animationRef;

        if (!current || !animationCurrent) return;

        setPlayer({ ...player, time: current.currentTime || 0 });
    }, [ref, player, setPlayer]);

    useEffect(() => {
        const { current } = ref;

        if (!current) return;

        if (player.playing) {
            current.play();
        } else {
            current.pause();
        }

        animationRef.current = requestAnimationFrame(repeat);
    }, [player, ref, repeat])

    return <footer>
        <div className={`controls ${target.x > BREAKPOINT ? "hidden" : ""}`}>
            <audio src={player.tracks[player.track].src} ref={ref} onEnded={() => onSongChange(1)} />

            <p onClick={() => onSongChange(-1)}><FontAwesomeIcon icon={faChevronLeft} /></p>

            <p onClick={() => setPlayer({ ...player, playing: !player.playing })}>
                <FontAwesomeIcon icon={player.playing ? faPause : faPlay} />
            </p>

            <p onClick={() => onSongChange(1)}><FontAwesomeIcon icon={faChevronRight} /></p>
        </div >

        <div className={`info ${target.x <= BREAKPOINT ? "hidden" : ""}`}>
            <p><strong>{time} - {duration}</strong></p>
            <p>{player.tracks[player.track].title}</p>
        </div>
    </footer >
}