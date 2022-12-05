// import PropTypes from 'prop-types';

export const SectionPart = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

// section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
// };