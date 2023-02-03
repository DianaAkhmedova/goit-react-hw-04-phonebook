import PropTypes from 'prop-types';

import { ContactItem, ContactInfo, RemoveBtn } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, type, removeContact }) => {
  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <RemoveBtn onClick={() => removeContact(id)} type={type}>
        Delete
      </RemoveBtn>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
