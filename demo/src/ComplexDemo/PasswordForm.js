import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

const PasswordForm = (props) => {
    const {
        // Formik HOC props
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,

        // Loki props
        backLabel,
        nextLabel,
        onBack,
        onNext,
        cantBack,
        isInFinalStep,
    } = props;

    return (
        <form onSubmit={handleSubmit} className="p-1">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
                    name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="passwordConfirmation">Password Confirmation</label>
                <input type="password" className={`form-control ${errors.passwordConfirmation && touched.passwordConfirmation && 'is-invalid'}`}
                    name="passwordConfirmation" id="passwordConfirmation" value={values.passwordConfirmation} onChange={handleChange} onBlur={handleBlur} />
                {errors.passwordConfirmation && touched.passwordConfirmation && <div className="invalid-feedback">{errors.passwordConfirmation}</div>}
            </div>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</button>
                <button type="submit" className="btn btn-primary ml-1" disabled={isSubmitting}>{nextLabel}</button>
            </div>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: props => ({
        password: props.user.password,
        passwordConfirmation: props.user.passwordConfirmation,
    }),

    validationSchema: Yup.object().shape({
        password: Yup.string().required(),
        passwordConfirmation: Yup.string().required().when('password', (password, schema) => {
            if (password === '') { return schema; }
            return schema.test('must-match', '${path} does not match', value => value === password);
        }),
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(PasswordForm);