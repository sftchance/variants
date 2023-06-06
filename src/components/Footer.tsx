import { useCallback, useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlay, faPause } from "@fortawesome/pro-duotone-svg-icons";

import { useScroll } from "../hooks";

import { verboseTimestamp } from "../utils";

import beginAgain from "../assets/begin_again.mp3";
import neverLeave from "../assets/never_leave.mp3";
import opals from "../assets/opals.mp3";
import thePace from "../assets/the_pace.mp3";

import "../style/Footer.scss";

const BREAKPOINT = 1200;

interface Track {
    title: string;
    src: string;
}

interface Player {
    playing: boolean;
    track: number;
    time: number;
    tracks: Track[];
}

const DEFAULT_PLAYER: Player = {
    playing: false,
    track: 0,
    time: 0,
    tracks: [{
        title: "Opals - Catching Flies",
        src: opals,
    }, {
        title: "Never Leave - Helsloot",
        src: neverLeave,
    }, {
        title: "Begin Again - Ben Böhmer",
        src: beginAgain,
    }, {
        title: "The Pace - ford.",
        src: thePace,
    }]
}

export const Footer: React.FC = () => {
    const { target } = useScroll();

    const ref = useRef<HTMLAudioElement>(null);
    const animationRef = useRef<number>(0);

    const [player, setPlayer] = useState<Player>(DEFAULT_PLAYER);

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