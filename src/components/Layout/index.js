import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from 'grommet';
import { ResponsiveLayout } from './styles';
import { Footer, Header, SideNav } from '../index';

const handleViewport = size => {
  switch (size) {
    case 'small':
      return { minWidth: '460px', minHeight: '700px' };
    default:
      return { minWidth: '1500px', minHeight: '975px' };
  }
};

const Layout = ({ children, background }) => {
  const size = useContext(ResponsiveContext);
  const viewport = handleViewport(size);
  return (
    <ResponsiveLayout
      viewport={viewport}
      background={{
        image: `url(${background})`,
        size: 'cover',
        position: 'fixed',
      }}
      justify="between"
    >
      <Box>
        <Header />
        <Box direction="row">
          {size !== 'small' && <SideNav />}
          {children}
        </Box>
      </Box>
      <Footer />
    </ResponsiveLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default Layout;
