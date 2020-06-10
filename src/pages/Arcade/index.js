import React from 'react';
import { Heading, Box } from 'grommet';
import { Layout, Card, CardGrid } from '../../components/index';
import { arcadeContent } from '../../CardData/PageContent';

const Arcade = () => {
  return (
    <Layout background="/img/arcade-background.jpg">
        <Heading color="text-strong" margin={{ bottom: 'large', top: 'none' }}>
          ARCADE
        </Heading>
        <CardGrid>
          {arcadeContent.map(content => (
            <Card
              title={content.title}
              alt={content.alt}
              background={content.background}
              image={content.image}
              desc={content.desc}
              label={content.label}
              link={content.link}
              path={content.path}
            />
          ))}
        </CardGrid>
    </Layout>
  );
};

export default Arcade;
