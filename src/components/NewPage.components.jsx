/* eslint-disable react/prop-types */
export const NewPage = ({ children, url }) => {
  return (
    <a href={url} target="_blank">
      {children}
    </a>
  );
};
