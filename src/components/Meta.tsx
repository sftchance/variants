import { Helmet } from 'react-helmet-async';

import { MetaProps  } from '../types';

export const Meta: React.FC<MetaProps> = ({ title, description }) => {
    return <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
    </Helmet>
}