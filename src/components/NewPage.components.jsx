/* eslint-disable react/prop-types */

export const NewPage = ({ children, url }) => {
  return (
    <a href='public/cv.pdf' target="_blank" className="NewPage flex justify-center items-center flex-col" style={{width:"100%", height:'100%' }}>

      {children}
    </a>
  );
};
