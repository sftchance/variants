import { StaticWrapperSectionProps } from "../../types";

import { HalftoneCard } from "..";

export const Decentered: React.FC<Partial<StaticWrapperSectionProps>> = () => {
  return (
    <div className='bi-fold'>
      <div>
        <HalftoneCard
          src='cdn/decentered.png'
          style={{ height: 720 }}
          disableOverlay={true}
        />
      </div>

      <div>
        <h2>THE DECENTERED DIGITAL SELF.</h2>

        <p>
          In our digital age, it's easy to feel like we have to present a
          polished and consistent image of ourselves to the world, even if that
          means hiding parts of our personality or interests. However, a person
          is not defined by their external representation, but rather by the sum
          of their experiences, values, and beliefs. By embracing the complexity
          and diversity of our identity, we can tap into new sources of
          inspiration and connection that can enrich our lives and our work.
        </p>
        <p>
          This concept is based on the idea that we are not just one-dimensional
          beings, but rather complex and multifaceted individuals with many
          different passions and talents. Variants can take many different
          forms, from separate social media accounts for different interests, to
          distinct websites or blogs for different projects, to specialized
          newsletters or podcasts for different audiences.
        </p>
        <p>
          The key is to create clear boundaries between these different
          variants, so that each one can thrive on its own and attract the right
          people. By doing so, we can avoid the trap of trying to be all things
          to all people, and instead focus on what really matters to us and our
          communities.
        </p>
      </div>
    </div>
  );
};
