import PropTypes from 'prop-types';

import {
  Form,
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

const Filter = ({ filterValue, handleChangeFilter }) => {
  return (
    <Form>
      <FormLabel>
        Find contacts by name
        <FormInput
          type="text"
          name="contactName"
          value={filterValue}
          placeholder="Enter name"
          onChange={handleChangeFilter}
        />
      </FormLabel>
    </Form>
  );
};
export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
