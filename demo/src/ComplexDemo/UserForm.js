import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

const UserForm = (props) => {
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
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && <span>{errors.email}</span>}
            </div>

            <button type="button" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</button>
            <button type="submit" disabled={isSubmitting}>{nextLabel}</button>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: props => ({
        name: props.user.name,
        email: props.user.email,
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(UserForm);