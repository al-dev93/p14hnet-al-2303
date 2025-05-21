import PropTypes from 'prop-types';
import style from './style.module.css';

/**
 * @param {function} setAddEmployee
 * @returns render modal window
 */
const ModalNewEmployee = ({ setAddEmployee }) => (
  <div className={style.wrapper}>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div className={style.modal} tabIndex="0" role="document">
      <span id="employee-created" className="sr-only">
        Close modal employee created
      </span>
      <button
        type="button"
        className={style.close}
        onClick={() => setAddEmployee((prevState) => !prevState)}
        aria-labelledby="employee-created"
      />
      <p>Employee Created!</p>
    </div>
  </div>
);

export default ModalNewEmployee;

ModalNewEmployee.propTypes = {
  setAddEmployee: PropTypes.func.isRequired,
};
