const getStyle = ({ looks = '', styles }) => {
  // map looks to a styles[look] string
  const customStyles = (looks && looks.trim().split(' ')) || [];
  return customStyles.map(look => styles[look]).join(' ');
};

export default getStyle;
