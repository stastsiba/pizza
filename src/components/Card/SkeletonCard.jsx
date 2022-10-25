import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonCard = (props) => (
  <ContentLoader
    rtl
    speed={2}
    width={350}
    height={600}
    viewBox="0 0 350 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="400" rx="10" ry="10" width="280" height="29" />
    <rect x="152" y="550" rx="10" ry="10" width="130" height="30" />
    <rect x="0" y="550" rx="10" ry="10" width="95" height="30" />
    <circle cx="139" cy="240" r="139" />
    <rect x="0" y="450" rx="0" ry="0" width="280" height="93" />
  </ContentLoader>
);
