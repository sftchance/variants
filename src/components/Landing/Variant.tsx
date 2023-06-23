import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { VariantProps } from "../../types";

import { HalftoneCard } from "..";

import "../../style/Variant.scss";

export const Variant: React.FC<
  React.HTMLAttributes<HTMLDivElement> & VariantProps
> = ({ name, created, twitter }) => {
  return (
    <HalftoneCard className='variant'>
      <p className='lead'>{created.toLocaleDateString()}</p>

      <h2>{name}</h2>

      <div className='links'>
        {twitter && (
          <a
            href={`https://twitter.com/${twitter === true ? name : twitter}`}
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </div>
    </HalftoneCard>
  );
};
