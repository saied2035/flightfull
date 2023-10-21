import PropTypes from 'prop-types';
import { ImExit } from 'react-icons/im';
import { signout } from '../redux/authSlice/authSlice';

const Signout = ({ isWhite, navigate, dispatch }) => (
  <>
    <button
      type="button"
      onClick={() => {
        dispatch(signout(navigate));
      }}
      className={`absolute right-4 top-4 font-medium ${isWhite ? 'text-white bg-[#97bf0e]'
        : 'text-[#97bf0e] bg-white'} px-3 py-2 rounded-full sm:flex hidden`}
    >
      Sign out
    </button>
    <ImExit
      size={20}
      onClick={() => {
        dispatch(signout(navigate));
      }}
      className={`sm:hidden flex absolute right-2 top-1 rotate-180 ${isWhite ? 'fill-black'
        : 'fill-white'}`}
    />
  </>
);

Signout.propTypes = {
  isWhite: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Signout;
