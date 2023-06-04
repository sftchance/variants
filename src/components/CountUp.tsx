import { useEffect, useMemo, useState } from 'react';
import { CountUpProps } from '../types';
import { verboseUnit } from '../utils';

export const CountUp = (props: CountUpProps) => {
    const {
        start = 0,
        end: _,
        duration = 1000,
        prepend = '',
        append = ''
    } = props;

    const [count, setCount] = useState<number>(start);

    const unitStr = useMemo(() => verboseUnit(_), [_]);

    const end = Number(_.toString().slice(0, 3))

    useEffect(() => {
        if (count < end) {
            setTimeout(() => {
                setCount(count + 1);
            }, duration / (end - start));
        }
    }, [start, end, duration, count]);

    return <>{prepend}{count}{unitStr}{count === end && append}</>
}