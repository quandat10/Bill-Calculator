import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { onSubmit: (name, price,quantity) => addNewItem(name, price,quantity) },
    dispatch
  );
};

export const NewItemformContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
