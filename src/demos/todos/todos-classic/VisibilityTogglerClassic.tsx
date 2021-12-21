import { connect } from 'react-redux';
import { toggleVisibility } from './visibility-actions';
import VisibilityToggler from '../todos-shared/VisibilityToggler';
import { AppDispatch } from './todos-classic-store';

const mapDispatchToProps = ( dispatch: AppDispatch ) => {
  return {
    hideCompleted: ( hide: boolean ) => {
      dispatch( toggleVisibility( hide ) );
    },
  };
};

export default connect( null, mapDispatchToProps )( VisibilityToggler );
