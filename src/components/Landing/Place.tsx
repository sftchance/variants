import { StaticWrapperSectionProps } from "../../types";

import { HalftoneCard } from "..";

export const Place: React.FC<Partial<StaticWrapperSectionProps>> = () => {
  return (
    <div className='bi-fold'>
      <div>
        <HalftoneCard
          src='cdn/place.png'
          style={{ height: 400, marginBottom: 40 }}
          disableOverlay={true}
        />

        <h2>THIS IS NOT A PLACE MADE FOR THE MANY.</h2>
        <p>
          My digital variants offer a unique approach to digital-being, and I
          invite you to explore the heart of my creation. Each variant captures
          the provenance of a diverging path, allowing you to explore their
          digital footprints like digital pyramids representing the efforts of
          the time before now.
        </p>
      </div>

      <div>
        <p>
          The essence of the variant home (where you are now) lies in the
          exploration and provenance collection of my digital variants. With
          highly niched personalities acting as gatekeepers of focused interests
          and audiences we have the ability to manage complexities with ease.
          Each variant and its spawned world serve as a visualization of a
          hyper-specific focus, creating an arguably-esoteric yet managed
          atmosphere that is authentic and self-aware.
        </p>

        <p>
          My home of variants is alive and ever-evolving, mirroring the growth
          and progression of the variants themselves. It is a living, breathing
          entity that embraces change and uncertainty, rejecting stagnation and
          encouraging growth through facing the unknown head-on. Just as things
          are born, others are killed with haste.
        </p>

        <p>
          If you find yourself not fully comprehending or feeling entirely
          comfortable in this space, fear not. It is by design. My home of
          variants is not meant for everyone. It is designed to resonate with
          those who have already had the experience needed to understand what
          led me here. If you do not yet, that is okay. Perhaps, you are not
          supposed to.
        </p>

        <p>
          To amplify the richness of this space, I create competing variants
          that explore a range of topics from different perspectives and
          justifications. What stands today may not stand tomorrow, as my space
          is ever-shifting and adapting to the evolving landscape of knowledge
          and exploration. If you want to reference something in the future,
          protect it.
        </p>

        <p>
          This is a place where we can be our-variant-selves and explore the
          world around us without concerns for the limitations of a single
          identity. Join me in this journey of self-expression and exploration,
          and let's see where our paths may lead us..
        </p>
      </div>
    </div>
  );
};
