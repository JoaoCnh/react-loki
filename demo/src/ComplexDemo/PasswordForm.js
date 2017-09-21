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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label htmlFor="passwordConfirmation">Password Confirmation</label>
                <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={values.passwordConfirmation} onChange={handleChange} onBlur={handleBlur} />
                {errors.passwordConfirmation && touched.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
            </div>

            <button type="button" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</button>
            <button type="submit" disabled={isSubmitting}>{nextLabel}</button>
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